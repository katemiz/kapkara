import math
import cadquery as cq
from cadquery.vis import show

import cad_export


"""
****************************************************************************************************
KAMA
****************************************************************************************************
"""
def kama(tube, overlap):
    # 1. Profile dimensions
    ax, ay = 0, 12.423 / 2
    bx, by = 3.681, 16.673 / 2
    cx, cy = 5.483, 6.5
    dx, dy = 3.741, 0
    cxp, cyp = cx, -cy
    bxp, byp = bx, -by
    axp, ayp = ax, -ay

    kama_length = overlap - 80

    # 2. Draw the 2D wire profile at 0,0
    profile_2d = (
        cq.Workplane("XY")
        .moveTo(ax, ay)
        .lineTo(bx, by)
        .lineTo(cx, cy)
        .lineTo(dx, dy)
        .lineTo(cxp, cyp)
        .lineTo(bxp, byp)
        .lineTo(axp, ayp)
        .close()
    )

    # 3. Extrude ONE single master item at 0,0 first
    single_solid = profile_2d.extrude(kama_length)

    # 4. Select a side face perpendicular to the YZ plane and drill through it
    # We use faces("<X") to select the flat back/side face along the X axis
    single_solid = (
        single_solid.faces("<X")
        .workplane()
        # Provide a list of (X, Y) offsets relative strictly to the face center
        .pushPoints([
            (0, 15),
            (0, kama_length - 15),
            (0, kama_length / 2) # Absolute local position relative to face center
        ])
        .hole(3.0) # Drills a 3mm hole at EVERY point in the list instantly!
    )


    # 3. Apply a chamfer to the outer edges of BOTH ends (>Z and <Z)
    # We select the top and bottom faces, grab their outer wires/edges, and chamfer them by 1.5mm
    # single_solid = (
    #     single_solid.faces(">Z or <Z")  # Selects both end faces
    #     .edges()                       # Selects all outer boundary edges of those faces
    #     .chamfer(1.5)                  # Applies a 1.5mm x 45-degree chamfer
    # )


    # 3. Create a workplane on the XZ plane to slice through the part
    # We draw a cutting profile (e.g., a 45-degree notch or rectangle) to chop off the top corner
    # --- BOTTOM TRIANGLE CUT ---
    # Start a fresh XZ plane, bring your solid into it, draw, and cut
    single_solid = (
        cq.Workplane("XZ")
        .add(single_solid)
        .moveTo(3, 0)
        .lineTo(5.5, 0)
        .lineTo(5.5, 10)
        .close()
        .cutThruAll("both")
    )

    # --- TOP TRIANGLE CUT ---
    # Do the same for the top cut
    single_solid = (
        cq.Workplane("XZ")
        .add(single_solid)
        .moveTo(3, kama_length)
        .lineTo(5.5, kama_length)
        .lineTo(5.5, kama_length - 10)
        .close()
        .cutThruAll("both")
    )

    # STEP EXPORT
    cad_export.exportSTEP(single_solid,tube["no"],'KAMA')

    # SINGLE SOLID TEST
    volume_mm3 = single_solid.val().Volume()

    # 5. Now generate the polar array and copy the pre-drilled 3D solid!
    result = (
        cq.Workplane("XY")
        .polarArray(
            radius=tube["od"] / 2,
            startAngle=0,
            angle=360,
            count=tube["channel_number"]
        )
        # We map the finished 3D solid template to each polar location
        .eachpoint(lambda loc: single_solid.val().located(loc))
    )

    # 6. Shift everything along Z
    result = result.translate((0, 0, tube["extended_zb"] + 30))

    return result,volume_mm3


def testing ():
    tube_data = {
        "no": 15,
        "od": 342,
        "id": 332.4,
        "thk": 4.8,
        "area_mm2": 5532.44,
        "inertia_mm4": 78621879.48,
        "channel_number": 8,
        "has_die": True,
        "material_density": 2704,
        "material_e": 70000000000,
        "yield_strength": 170000000,
        "ultimate_strength": 210000000,
        "state_name": "INTERMEDIATE",
        "extended_zb": 100
    }

    sonuc,vol = kama(tube_data, 300)

    show(sonuc)

#testing()