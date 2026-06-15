import * as math from "mathjs";

export default class MastVibration {

    constructor(options = {}) {

        this.tipMass = options.params.payload_mass || 0;
        this.modes = options.modes || 5;
        this.integrationSteps = options.integrationSteps || 500;
        this.sections = [];

        Object.entries(options.params.tubes).forEach(([key, tube]) => {
            const index = parseInt(key);

            this.sections[index] = {};

            if (index === 0) {
                this.sections[index].L = (options.extendedHeight - options.params.tubes[index + 1].extended_zt) / 1000;
            } else if (index === options.params.tubes.length - 1) {
                this.sections[index].L = tube.extended_zt / 1000;
            } else {
                this.sections[index].L = (tube.extended_zt - options.params.tubes[index + 1].extended_zt) / 1000;
            }

            this.sections[index].EI = tube.EI_Nm2;
            this.sections[index].mu = tube.mass_per_m;
        });

        // Order sections from BASE to TOP : Important
        this.sections.reverse();

        this.totalLength = this.sections.reduce(
            (sum, s) => sum + s.L,
            0
        );

    }


    // Simpson numerical integration
    integrate(func, a, b)
    {
        const n = this.integrationSteps;
        const h = (b - a) / n;

        let sum = 0;

        for(let i=0; i<=n; i++)
        {
            let x = a + i*h;

            let weight =
                (i===0 || i===n) ? 1 :
                (i % 2 ? 4 : 2);

            sum += weight * func(x);
        }

        return sum*h/3;
    }



    // Ritz polynomial mode shape
    phi(i, x)
    {
        let r = x / this.totalLength;
        return Math.pow(r, i+2);
    }



    // second derivative of mode shape
    d2phi(i, x)
    {
        let n = i + 2;

        let r = x / this.totalLength;

        return (
            n*(n-1) *
            Math.pow(r,n-2) /
            (this.totalLength*this.totalLength)
        );
    }



    buildMatrices(sections=this.sections)
    {
        let K = math.zeros(
            this.modes,
            this.modes
        );

        let M = math.zeros(
            this.modes,
            this.modes
        );


        let x0 = 0;


        // Beam contribution

        for(const sec of sections)
        {
            let xa = x0;
            let xb = x0 + sec.L;


            for(let i=0;i<this.modes;i++)
            {
                for(let j=0;j<this.modes;j++)
                {

                    let kij =
                    this.integrate(
                        x =>
                            sec.EI *
                            this.d2phi(i,x) *
                            this.d2phi(j,x),
                        xa, xb
                    );


                    let mij =
                    this.integrate(
                        x =>
                            sec.mu *
                            this.phi(i,x) *
                            this.phi(j,x),
                        xa, xb
                    );


                    K.set(
                        [i,j],
                        K.get([i,j])+kij
                    );

                    M.set(
                        [i,j],
                        M.get([i,j])+mij
                    );
                }
            }

            x0 = xb;
        }



        // Tip mass contribution

        for(let i=0;i<this.modes;i++)
        {
            for(let j=0;j<this.modes;j++)
            {
                let m =
                    this.tipMass *
                    this.phi(
                        i,
                        this.totalLength
                    ) *
                    this.phi(
                        j,
                        this.totalLength
                    );


                M.set(
                    [i,j],
                    M.get([i,j])+m
                );
            }
        }


        return {K,M};
    }


    calculateFrequencies(sections=this.sections)
    {
        let {K,M} = this.buildMatrices(sections);

        // Generalized eigenvalue:
        // K*x = w^2*M*x

        let A = math.multiply(
            math.inv(M),
            K
        );

        let eig = math.eigs(A);

        // Convert mathjs matrix -> JS array
        let eigenValues = Array.from(
            eig.values.valueOf()
        );

        let frequencies = eigenValues
            .map(v => {

                // Remove tiny negative numerical errors
                if (v < 0 && Math.abs(v) < 1e-12)
                    v = 0;

                return Math.sqrt(v)/(2*Math.PI);
            })
            .sort((a,b)=>a-b);

        frequencies = frequencies.filter(
            f => Number.isFinite(f)
        );

        //console.log("Frequencies:", frequencies);
        return frequencies;
    }


    comparativeFrequencies()
    {
        /*
        This should compare frequencies for :
            - STIFF Single beam made up of biggest EI section whole length with mass
            - ELASTIC Single beam made up of smallest EI section whole length with mass
        */

        // When single tube with whole length : STIFF beam
        let stiffSection = {
            L: this.totalLength,
            EI: this.sections[0].EI,
            mu: this.sections[0].mu
        };

        let frequenciesStrong = this.calculateFrequencies([stiffSection]);
        //this.printResults();


        // When multiple tubes : WEAK beam
        let weakSection = {
            L: this.totalLength,
            EI: this.sections.at(-1).EI,
            mu: this.sections.at(-1).mu
        };


        //this.sections = [weakSection];
        let frequenciesWeak = this.calculateFrequencies([weakSection]);
        //this.printResults();

        
        return {strong:frequenciesStrong, weak:frequenciesWeak};
    }


    printResults()
    {
        let f = this.calculateFrequencies();

        console.log(
            `Mast length: ${this.totalLength.toFixed(3)} m`
        );

        console.log(
            `Tip mass: ${this.tipMass} kg`
        );

        console.log("\nResonance frequencies:");

        f.forEach((x,i)=>{
            console.log(
                `Mode ${i+1}: ${x.toFixed(3)} Hz`
            );
        });

        return f;
    }
}



