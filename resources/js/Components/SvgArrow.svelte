<script>
  // Expose the tip coordinates as props with default fallback values
  export let tipX = 85;
  export let tipY = 50;
  
  // Customization configuration props
  export let arrowLength = 500;  // Length of the horizontal shaft line
  export let headWidth = 130;    // Total height/vertical spread of the triangle base
  export let headLength = 120;   // Distance from the triangle base to the sharp tip
  export let fill = "#2563eb";   // Fill color for the arrowhead and shaft stroke
  export let strokeWidth = 26;   // Thickness of the arrow shaft
  
  // Reactive declarations (automatically recalculate if tipX or tipY changes)
  $: baseX = tipX - headLength;
  $: topY = tipY - (headWidth / 2);
  $: bottomY = tipY + (headWidth / 2);
  $: shaftStartX = baseX - arrowLength;
</script>

<!-- <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 100 100" 
  width="100%" 
  height="100%"
> -->
  <line 
    x1={shaftStartX} 
    y1={tipY} 
    x2={baseX} 
    y2={tipY} 
    stroke={fill} 
    stroke-width={strokeWidth} 
    stroke-linecap="round" 
  />
  
  <polygon 
    points="{baseX},{topY} {tipX},{tipY} {baseX},{bottomY}" 
    fill={fill} 
  />
<!-- </svg> -->