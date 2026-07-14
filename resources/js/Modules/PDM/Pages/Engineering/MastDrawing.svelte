<script>

    import SvgArrow from "$components/SvgArrow.svelte";

    let {
        data,
        drawState,
        width,
    } = $props();

    const height = $derived(width * 1.2);
    const scale = $derived(width / data.box.w);

    const offsetX = $derived(width / 2);
    const offsetY = $derived(height);

    const fontSize = $derived((16/scale).toFixed(0));
    const textOffset = $derived(scale ? (16/scale).toFixed(0) : 10);

</script>

<div class="drawing">

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
                    r={20}
                    class="center-of-pressure"
                    fill="#444545"
                />

                <!-- payload load value -->
                <SvgArrow
                    tipX={data.cop.x}
                    tipY={data.cop.y}
                    text={-data.cop.load.toFixed(0) + " N"}
                    length={data.payload.w}
                    fontSize={fontSize}
                    direction="R"
                />

                <!-- Payload Mass  -->
                <SvgArrow
                    tipX={data.cop.x}
                    tipY={data.cop.y}
                    text={9.81*data.payload.mass.toFixed(0) + " N"}
                    length={data.payload.mass * data.payload.w / data.cop.load}
                    fontSize={fontSize}
                    direction="D"
                />

                <!-- payload COP line-->
                <line
                    x1={data.cop.x + data.payload.w/4}
                    y1={data.cop.y}
                    x2={0.4*data.ground.w}
                    y2={data.cop.y}
                    class="tube"
                    stroke="gray"
                    stroke-width="3"
                />

                <!-- payload COP : Height Value-->
                <text
                    x={0.4*data.ground.w }
                    y={-(data.cop.y + 20)}
                    text-anchor="end"
                    font-size="{fontSize}"
                    fill="black"
                    transform="scale(1,-1)"
                >
                   {data.cop.z_value.toFixed(0)}
                </text>





            {/if}


            <!-- EXTENDED/NESTED LINE AND TEXT -->
            <line
                x1={-0.4*data.ground.w}
                y1={data.payload.y}
                x2={-data.payload.w *.55}
                y2={data.payload.y}
                class="tube"
                stroke="black"
                stroke-width="3"
            />

            <text
                x={-0.4*data.ground.w }
                y={-(data.payload.y - textOffset)}
                text-anchor="start"
                font-size="{fontSize}"
                fill="black"
                transform="scale(1,-1)"
            >
                {drawState !== 'Nested' ? 'Extended Height': 'Nested Height'} {data.mast.height}
            </text>





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
                        text={-tube.load_value.toFixed(0) + " N"}
                        length = {tube.load_value * data.payload.w /data.cop.load}
                        fontSize={fontSize}
                        direction="R"
                    />


                    <!-- Wind Load Dimension Line and Text : top faces-->
                    <line
                        x1={0}
                        y1={tube.load_z}
                        x2={0.4*data.ground.w}
                        y2={tube.load_z}
                        class="tube"
                        stroke="gray"
                        stroke-width="3"
                    />

                    <text
                        x={0.4*data.ground.w }
                        y={-(tube.load_z + 20)}
                        text-anchor="end"
                        font-size="{fontSize}"
                        fill="black"
                        transform="scale(1,-1)"
                    >
                        {tube.load_z.toFixed(0)}
                    </text>

                {/if}

                <!-- Dimension line and text : bottom faces-->
                <line
                    x1={tube.w/2 +40}
                    y1={tube.y}
                    x2={0.4*data.ground.w}
                    y2={tube.y}
                    class="tube"
                    stroke="gray"
                    stroke-width="3"
                />

                <text
                    x={0.4*data.ground.w }
                    y={-(tube.y + 20)}
                    text-anchor="end"
                    font-size="{fontSize}"
                    fill="black"
                    transform="scale(1,-1)"
                >
                   {tube.zb}
                </text>

                <!-- Dimension line and text : top faces-->
                <line
                    x1={tube.w/2 +40}
                    y1={tube.y + tube.h}
                    x2={0.4*data.ground.w}
                    y2={tube.y + tube.h}
                    class="tube"
                    stroke="gray"
                    stroke-width="3"
                />

                <text
                    x={0.4*data.ground.w }
                    y={-(tube.y + tube.h + 20)}
                    text-anchor="end"
                    font-size="{fontSize}"
                    fill="black"
                    transform="scale(1,-1)"
                >
                   {tube.zt}
                </text>

            {/each}

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

            <!-- SIDE ADAPTER -->
            <polyline
                points={data.side_adapter.points.map(p => `${p.x},${p.y}`).join(' ')}
                class="tube"
                fill="red"
                stroke="black"
                stroke-width={false}
                fill-opacity="0.3"
            />
            
            <circle
                cx={data.side_adapter.x}
                cy={data.side_adapter.y + data.ground.h}
                r={25}
                class="center-of-pressure"
                fill="#444545"
            />

            {#if drawState === 'Loads'}

            <SvgArrow
                tipX={data.side_adapter.x}
                tipY={data.side_adapter.y + data.ground.h}
                text={"999"}
                fontSize={fontSize}
                direction="L"
            />

            <!-- GROUND REACTION FORCE -->

            <SvgArrow
                tipX={0}
                tipY={data.ground.h}
                text={"999"}
                fontSize={fontSize}
                direction="R"
            />
            {/if}



        </g>

    </svg>







</div>