<script>
    import QRCode from "qrcode";

    let {
        value = "",
        size = 64,
        dark = "#000000",
        light = "#ffffff",
    } = $props();

    let canvasElement;

    // Reactively update the QR code whenever 'value' or 'size' changes
    $effect(() => {
        if (value) {
            QRCode.toCanvas(
                canvasElement,
                value,
                {
                    width: size,
                    margin: 2,
                    color: {
                        dark: dark,
                        light: light,
                    },
                },
                (error) => {
                    if (error) console.error("QR Generation Error:", error);
                },
            );
        }
    });
</script>

<div class="qr-container">
    <canvas bind:this={canvasElement}></canvas>
</div>

<style>
    .qr-container {
        display: flex;
        justify-content: center;
        background: white;
        padding: 10px;
        border-radius: 8px;
    }
    canvas {
        max-width: 100%;
        height: auto !important;
    }
</style>
