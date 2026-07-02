import math
import cadquery as cq
from cadquery.vis import show

import cad_export


def baseAssy(tube):
    inner_big_hole_dia = 80
    no_of_holes = 4  # Default fallback count if loop doesn't match
    bolt_dia = 12
    base_thk = 20

    bolt_circle_radius = (tube["od"] + 114) / 2

    for i in [4, 6, 8, 10, 12]:
        if math.pi * bolt_circle_radius / i > 50 and math.pi * bolt_circle_radius / i < 70:
            no_of_holes = i
            break

    base_plate_radius = bolt_circle_radius + 1.5 * bolt_dia

    # 1. Create the main plate cylinder blank
    result = cq.Workplane("XY").circle(base_plate_radius).extrude(base_thk)
    
    # 2. Move to the top face
    result = result.faces(">Z").workplane()
    
    # 3. Generate the polar pattern points and IMMEDIATELY punch the bolt holes
    result = result.polarArray(
        radius=bolt_circle_radius,  # ◄ FIX 1: Use the calculated circle radius
        startAngle=0,
        fill=True,
        count=no_of_holes,
        angle=360.0,
    ).hole(bolt_dia)                # ◄ FIX 2: Call hole directly on the array points
    
    # 4. Now reset center to origin and punch your single big center hole
    result = result.center(0, 0).hole(inner_big_hole_dia)

    # STEP EXPORT
    cad_export.exportSTEP(result,tube["no"],'BASE')

    return result
    




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
        "state_name": "BASE"
    }

    show(baseAssy(tube_data))