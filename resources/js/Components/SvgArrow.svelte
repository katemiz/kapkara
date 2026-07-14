<script>
  let {
      tipX = 85,
      tipY = 50,
      text = '',
      length = 200,
      fontSize = 30,
      direction = "R",
  } = $props();

  const headWidth = 80;     // Total height/vertical spread of the triangle base
  const headLength = 120;    // Distance from the triangle base to the sharp tip
  const fill = "#2563eb";    // Fill color for the arrowhead and shaft stroke
  const strokeWidth = 16;    // Thickness of the arrow shaft
  
  // Reactively calculate all drawing points
  let baseX = $derived(setParams("baseX", direction));
  let baseY = $derived(setParams("baseY", direction));
  let leftX = $derived(setParams("leftX", direction));
  let rightX = $derived(setParams("rightX", direction));
  let topY = $derived(setParams("topY", direction));
  let bottomY = $derived(setParams("bottomY", direction));
  let shaftStartX = $derived(setParams("shaftStartX", direction));
  let shaftStartY = $derived(setParams("shaftStartY", direction));

  // Calculates structural parameters based on direction
  // Optimized for a container with global: scale(X, -Y)
  function setParams(parameter, dir) {
    const d = dir.toUpperCase();

    // 1. Position the back flat base of the arrowhead relative to the tip coordinate
    if (parameter === "baseX") {
      if (d === "L") return tipX + headLength;
      if (d === "R") return tipX - headLength;
      return tipX; // Vertically aligned arrows share the tip's X
    }
    if (parameter === "baseY") {
      // Due to container's negative scale(..., -Y):
      // Physically pointing "Down" (D) means heading toward decreasing local Y.
      // Physically pointing "Up" (U) means heading toward increasing local Y.
      if (d === "U") return tipY - headLength; 
      if (d === "D") return tipY + headLength; 
      return tipY; 
    }

    // 2. Head spread/wings boundaries
    // For Horizontal arrows (L, R) - wings spread out Vertically (Y axis)
    if (parameter === "topY") return tipY - headWidth / 2;
    if (parameter === "bottomY") return tipY + headWidth / 2;

    // For Vertical arrows (U, D) - wings spread out Horizontally (X axis)
    if (parameter === "leftX") return tipX - headWidth / 2;
    if (parameter === "rightX") return tipX + headWidth / 2;

    // 3. Pin down where the shaft line begins (the tail of the arrow)
    if (parameter === "shaftStartX") {
      if (d === "L") return tipX + length;
      if (d === "R") return tipX - length;
      return tipX;
    }
    if (parameter === "shaftStartY") {
      if (d === "U") return tipY + length;
      if (d === "D") return tipY - length;
      return tipY;
    }
  }

  // Get text placement coordinates mirroring the global flip
  let textParams = $derived(getTextParams(direction, tipX, tipY, length));

  function getTextParams(dir, tx, ty, len) {
    const offset = 25; 
    const d = dir.toUpperCase();

    switch (d) {
      case "L":
        return { x: tx + len + offset, y: ty, anchor: "start", baseline: "middle" };
      case "U":
        return { x: tx + offset, y: ty - (len / 2), anchor: "start", baseline: "middle" };
      case "D":
        return { x: tx + offset, y: ty - len , anchor: "start", baseline: "middle" };
      case "R":
      default:
        return { x: tx - len - offset, y: ty, anchor: "end", baseline: "middle" };
    }
  }
</script>

<line 
  x1={shaftStartX} 
  y1={shaftStartY} 
  x2={baseX} 
  y2={baseY} 
  stroke={fill} 
  stroke-width={strokeWidth} 
  stroke-linecap="round" 
/>

{#if direction === "R" || direction === "L"}
  <polygon 
    points="{baseX},{topY} {tipX},{tipY} {baseX},{bottomY}" 
    fill={fill} 
  />
{:else}
  <polygon 
    points="{leftX},{baseY} {tipX},{tipY} {rightX},{baseY}" 
    fill={fill} 
  />
{/if}

<text
  x={textParams.x}
  y={-textParams.y}
  transform="scale(1, -1)"
  text-anchor={textParams.anchor}
  dominant-baseline={textParams.baseline}
  font-size={fontSize}
  fill="black"
>
  {text}
</text>