export default class MastVibration {
    constructor(sections, tube_length, payloadMass) {
        // sections: Array from base (index 0) to tip. 
        // Each section: { length (mm), EI (Nm2), m_per_length (kg/m) }
        this.sections = sections.map(s => ({
            L: tube_length / 1000, // convert mm to meters
            EI: s.EI_Nm2,
            mu: s.mass_per_m
        }));
        this.mPayload = payloadMass; // in kg
    }

    /**
     * Computes the global transfer matrix for a given angular frequency omega (rad/s)
     */
    getGlobalMatrix(omega) {
        if (omega === 0) return null;

        // Start with a 4x4 Identity Matrix
        let globalTM = [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ];

        // Multiply matrices from base to tip
        for (const sec of this.sections) {
            // Calculate wavenumber beta for the Bernoulli-Euler segment
            const beta = Math.pow((sec.mu * omega * omega) / sec.EI, 0.25);
            const bL = beta * sec.L;

            const ch = Math.cosh(bL);
            const sh = Math.sinh(bL);
            const c = Math.cos(bL);
            const s = Math.sin(bL);

            // Standard Euler-Bernoulli beam transfer matrix coefficients
            const c1 = 0.5 * (ch + c);
            const c2 = 0.5 * (sh + s) / beta;
            const c3 = 0.5 * (ch - c) / (beta * beta);
            const c4 = 0.5 * (sh - s) / (beta * beta * beta);

            // Construct field matrix for current segment mapping state vector: [w, theta, M, V]
            const fieldM = [
                [c1, c2, c3 / sec.EI, c4 / sec.EI],
                [beta * beta * c4, c1, c2 / sec.EI, c3 / sec.EI],
                [sec.EI * beta * beta * c3, sec.EI * beta * beta * c4, c1, c2],
                [sec.EI * beta * beta * beta * c2, sec.EI * beta * beta * c3, beta * beta * c4, c1]
            ];

            globalTM = this.multiply4x4(fieldM, globalTM);
        }

        // Apply point boundary condition at the tip for the payload mass (adds inertal shear force)
        const payloadEffect = [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [this.mPayload * omega * omega, 0, 0, 1]
        ];

        return this.multiply4x4(payloadEffect, globalTM);
    }

    /**
     * Boundary condition determinant tracking. 
     * For a fixed-free cantilever system, boundary values at base are w=0, theta=0.
     * Boundary values at tip are M=0, V=0.
     */
    getResidual(omega) {
        const TM = this.getGlobalMatrix(omega);
        // Residual determinant of top-right submatrix mapping unknown base values (M_0, V_0) to zero tip values
        return (TM[2][2] * TM[3][3]) - (TM[2][3] * TM[3][2]);
    }

    /**
     * Scans frequency ranges to isolate zero-crossings (roots)
     */
    findNaturalFrequencies(maxFreqHz = 150, stepHz = 0.1) {
        const frequenciesHz = [];
        let prevOmega = 0.01;
        let prevResidual = this.getResidual(prevOmega);

        // Step scan over target domain
        for (let f = stepHz; f <= maxFreqHz; f += stepHz) {
            const omega = 2 * Math.PI * f;
            const residual = this.getResidual(omega);

            // Sign change indicates a natural frequency root found in this interval
            if (prevResidual * residual < 0) {
                // Refine root via basic bisection
                const accurateF = this.bisectionRefine(f - stepHz, f);
                frequenciesHz.push(accurateF);
            }
            prevResidual = residual;
        }

        return frequenciesHz;
    }

    bisectionRefine(fMin, fMax, iterations = 15) {
        let low = fMin;
        let high = fMax;
        let mid = 0;

        for (let i = 0; i < iterations; i++) {
            mid = (low + high) / 2;
            const resMid = this.getResidual(2 * Math.PI * mid);
            const resLow = this.getResidual(2 * Math.PI * low);

            if (resLow * resMid < 0) {
                high = mid;
            } else {
                low = mid;
            }
        }
        return mid;
    }

    multiply4x4(A, B) {
        const C = Array(4).fill(0).map(() => Array(4).fill(0));
        for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 4; c++) {
                C[r][c] = A[r][0]*B[0][c] + A[r][1]*B[1][c] + A[r][2]*B[2][c] + A[r][3]*B[3][c];
            }
        }
        return C;
    }
}