import math
import cadquery as cq
from cadquery.vis import show

import cad_export

"""
****************************************************************************************************
TUBES
****************************************************************************************************
"""

def create_tube(tube):

    OD = tube["od"]
    ID = tube["id"]
    no_of_features = tube["channel_number"]

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
    # result = result.hole(payload_interface_hole_dia)

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