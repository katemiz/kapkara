import math
import cadquery as cq
from cadquery.vis import show

import cad_export

"""
****************************************************************************************************
TUBES
****************************************************************************************************
"""

def create_tube(tube,overlap):

    OD = tube["od"]
    ID = tube["id"]
    no_of_features = tube["channel_number"]

    kama_length = overlap - 80


    # 1. Base Cylinder Geometry
    result = cq.Workplane("XY").circle(OD / 2).circle(ID / 2)
    result = result.extrude(tube["length"])

    # 2. Local Coordinate Definitions
    # Since polarArray(radius=OD/2) moves the local origin right to the outer wall,
    # your points are now perfectly localized around (0,0) on that edge.
    ax = 0
    ay = 0

    bx = 0
    by = 6.5

    cx = 3.5
    cy = by + 3.5 * math.tan(math.radians(30))

    dy = cy + 4
    dx = -(OD / 2 - math.sqrt((math.pow(OD / 2, 2) - math.pow(dy, 2))))

    fx = -((OD / 2 - ID / 2) + 3)
    fy = 0

    ex = fx + 3
    ey = 3 * math.tan(math.radians(75))

    # 3. Apply Polar Array on the Outer Radius
    result = (
        result.faces(">Z")  # Select the top face of the cylinder
        .workplane()  # Create a fresh 2D sketch plane
        .polarArray(
            radius=OD / 2,  # Moves the sketch origin to the outer diameter wall
            startAngle=0,
            angle=360,
            count=no_of_features,
        )
        .each(
            lambda loc: (
                cq.Workplane()
                .moveTo(ax, ay)
                .lineTo(bx, by)
                .lineTo(cx, cy)
                .lineTo(dx, dy)
                .lineTo(ex, ey)
                .lineTo(fx, fy)
                .lineTo(ex, -ey)
                .lineTo(dx, -dy)
                .lineTo(cx, -cy)
                .lineTo(bx, -by)
                .close()
                .extrude(tube["length"])
                .val()
                .located(loc)
            )  # ◄ CRITICAL: Applies the position/rotation to each array slot
        )
    )

    # BASE CONNECTION OR NUT HOUSING CONNECTION HOLES (SHOULD HAVE COUNTERSINK ALSO)
    if tube["state_name"] == "BASE":
        connection_hole_dia = 10.25
    else:
        connection_hole_dia = 12.25

    # 1. Create a separate cutting tool (the cylinder) on the XZ plane
    # We do NOT add the main result here. We just draw the hole geometry.
    hole_tool = (
        cq.Workplane("XZ")
        .moveTo(0, 20)
        # Extrude both ways so it punches all the way through the tube walls
        .circle(connection_hole_dia / 2)  # hole(10.25) creates an 10.25mm diameter, 
        .extrude(tube["od"] * 2, both=True) 
    )

    # 2. Polar array just the cutting cylinders around the center
    all_holes = (
        cq.Workplane("XY")
        .polarArray(
            radius=0,
            startAngle=0,
            angle=360,
            count=tube["channel_number"]
        )
        .eachpoint(lambda loc: hole_tool.val().located(loc))
    )

    # 3. Cut the grouped cylinders out of your main tube solid
    # This keeps your main body count at exactly 1 in the STEP file
    result = result.cut(all_holes)

    # KAMA HOLES
    if tube["state_name"] != "BASE":

        # 1. Create independent 3D cutting cylinders using pushPoints and extrude
        kama_holes_tool = (
            cq.Workplane("XZ")
            .pushPoints([
                (0, 45),
                (0, 45 + (kama_length - 30) / 2),
                (0, 45 + kama_length - 30)
            ])
            .circle(3.0 / 2) # 3mm diameter, so radius is 1.5
            # Extrude wide enough to pass cleanly through the geometry
            .extrude(tube["od"] * 2, both=True) 
        )

        # 2. Polar array the cutting tool cluster around the main XY axis
        # Note: If the tool positions are already relative to the global center, 
        # use radius=0 so the array only rotates them rather than offsetting them twice.
        all_kama_holes = (
            cq.Workplane("XY")
            .polarArray(
                radius=0, # Changed from tube["od"]/2 if coordinates are global
                startAngle=0,
                angle=360,
                count=tube["channel_number"]
            )
            .eachpoint(lambda loc: kama_holes_tool.val().located(loc))
        )

        # 3. Cut the grouped cylinders out of your main tube solid
        # This keeps your main body count at exactly 1 in the STEP file
        result = result.cut(all_kama_holes)

    # Create the plate model from our previous step
    # (Make sure to export your actual model variable name, which was 'result')
    # result.export(r"C:\Users\ThinkPad\Desktop\CADQuery\plate.step")

    # result.export(r"C:\Users\ThinkPad\Desktop\CADQuery\plate.dxf")
    # Render the solid
    #
    # mass = result.val().Volume() * density

    # print(f"Volume of the shape: {mass} kg")


    # STEP EXPORT
    cad_export.exportSTEP(result,tube["no"],'TUBE')

    return result  # ◄ CRITICAL: Send the generated solid back to the loop