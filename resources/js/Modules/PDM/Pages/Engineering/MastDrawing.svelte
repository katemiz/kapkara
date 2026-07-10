<script>

    import SvgArrow from "$components/SvgArrow.svelte";

    let {
        data,
        drawState,
        width,
    } = $props();

    const height = $derived(width * 19 / 16);
    const scale = $derived(width / data.box.w);

    const offsetX = $derived(width / 2);
    const offsetY = $derived(height);

</script>

<div class="drawing has-background-warning">

    {console.log("MastDrawing width ",width,height,scale)}

    <svg width={width} height={height}>

        <g transform={`
            translate(${offsetX}, ${offsetY})
            scale(${scale}, -${scale})
        `}>

            <!-- GROUND -->
            <rect
                x={data.ground.x}
                y={data.ground.y}
                width={data.ground.w}
                height={data.ground.h}
                class="ground"
                fill="#86a1c0"
            />   

            <!-- CENTERLINE -->
            <line
                x1=0
                y1={10}
                x2=0
                y2={data.box.h -10}
                class="centerline"
                stroke="#86a1c0"
                stroke-width="2"
            />

            {#if drawState === 'Loads'}
                <!-- PAYLOAD AND CENTER OF PRESSURE (COP) -->
                <rect
                    x={data.payload.x}
                    y={data.payload.y}
                    width={data.payload.w}
                    height={data.payload.h}
                    class="box"
                    fill="#C5E0D8"
                />
                <circle
                    cx={data.cop.x}
                    cy={data.cop.y}
                    r={50}
                    class="center-of-pressure"
                    fill="#444545"
                />

                <SvgArrow
                    tipX={data.cop.x}
                    tipY={data.cop.y}
                />

                <!-- payload COP line-->
                <line
                    x1={data.cop.x + data.payload.w/4}
                    y1={data.cop.y}
                    x2={0.4*data.ground.w}
                    y2={data.cop.y}
                    class="tube"
                    stroke="black"
                    stroke-width="3"
                />

            {/if}

            <!-- TUBES -->
            {#each data.tubes as tube}

                <rect
                    x={tube.x}
                    y={tube.y}
                    width={tube.w}
                    height={tube.h}
                    class="tube"
                    fill="#667a8f"
                    fill-opacity="0.3"
                    stroke="black"
                    stroke-width="3"
                />

                {#if drawState !== 'Nested'}
                <!-- GUYING LINES -->
                <line
                    x1={-0.5*data.ground.w}
                    y1={data.ground.h}
                    x2={tube.x}
                    y2={tube.y+tube.h}
                    class="tube"
                    stroke="black"
                    stroke-width="3"
                />
                {/if}

                {#if drawState === 'Loads'}
                <!-- WIND LOAD ARROW -->
                <SvgArrow
                    tipX={tube.x}
                    tipY={tube.load_z}
                />

                <!-- Dimension line : top faces-->
                <line
                    x1={0}
                    y1={tube.load_z}
                    x2={0.4*data.ground.w}
                    y2={tube.load_z}
                    class="tube"
                    stroke="gray"
                    stroke-width="3"
                />

                {/if}

                <!-- PAYLOAD ADAPTER -->
                <rect
                    x={data.payload_adapter.x}
                    y={data.payload_adapter.y}
                    width={data.payload_adapter.w}
                    height={data.payload_adapter.h}
                    class="tube"
                    fill="#667a8f"
                    fill-opacity="0.3"
                    stroke="black"
                    stroke-width="3"
                />

                <!-- <text
                    x=1000
                    y=3000
                    text-anchor="middle"
                    font-size="140"
                    fill="black"
                    transform={`translate(-250,${data.extendedHeight-tube.extended_zt}) scale(1,-1)`}
                >
                    {drawState}
                </text> -->



<!-- 
                <SvgArrow
                    tipX={data.ground.x}
                    tipY={data.ground.h}
                />
 -->


                <!-- Dimension line : bottom faces-->
                <line
                    x1={tube.w/2 +40}
                    y1={tube.y}
                    x2={0.4*data.ground.w}
                    y2={tube.y}
                    class="tube"
                    stroke="black"
                    stroke-width="3"
                />


                <!-- Dimension line : top faces-->
                <line
                    x1={tube.w/2 +40}
                    y1={tube.y + tube.h}
                    x2={0.4*data.ground.w}
                    y2={tube.y + tube.h}
                    class="tube"
                    stroke="black"
                    stroke-width="3"
                />




                <!-- <text
                    x={tube.od/2 + 0.8*data.svg.ground.w/2}
                    y={tube.extended_zt + data.svg.ground.h+100}
                    text-anchor="middle"
                    font-size="140"
                    fill="black"
                    transform={`translate(-250,${data.extendedHeight-tube.extended_zt}) scale(1,-1)`}
                >
                    {tube.extended_zt}mm
                </text> -->
            {/each}

            <!-- SIDE ADAPTER -->
            <polyline
                points={data.side_adapter.points.map(p => `${p.x},${p.y}`).join(' ')}
                class="tube"
                fill="red"
                stroke="black"
                stroke-width="3"
                fill-opacity="0.3"
            />
            
            <circle
                cx={data.side_adapter.x}
                cy={data.side_adapter.y + data.ground.h}
                r={25}
                class="center-of-pressure"
                fill="#444545"
            />


        </g>

    </svg>







</div>