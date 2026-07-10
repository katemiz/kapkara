import math
import cadquery as cq
from cadquery.vis import show

import cad_export

"""
****************************************************************************************************
TUBES
****************************************************************************************************
"""

def power_screw(length):

    # 105064

    cylinder = (
        cq.Workplane("XY")
        .circle(25/2)
        .extrude(124, both=False) 
    )

    cylinder = cylinder.faces(">Z").circle(34/2).extrude(12, both=False)
    cylinder = cylinder.faces(">Z").circle(28.5/2).extrude(113, both=False)


    target_circumference = 2 * math.pi * 12.5

    cylinder = (
        cylinder
        .edges()
        .filter(lambda edge: 
            123.9 <= edge.Center().z <= 124.1 and          # 1. Must be at Z = 124
            math.isclose(edge.Length(), target_circumference, rel_tol=0.01) # 2. Must match the Ø25mm size
        )
        .fillet(2) 
    )








    cylinder = cylinder.faces(">Z").circle(30/2).extrude(length-316, both=False)
    cylinder = cylinder.faces(">Z").circle(24/2).extrude(67, both=False)
    cylinder = cylinder.faces(">Z").edges().fillet(12)

    cylinder = cylinder.faces("<Z").edges().chamfer(3)

    cylinder = cylinder.translate((0, 0, 13.25))




    #bottom_face = cylinder.faces("<Z").workplane()

    # cylinder = (
    #     bottom_face
    #     .circle(20)
    #     .extrude(200, both=False) 
    # )

    # STEP EXPORT
    cad_export.exportSTEP(cylinder,1,'POWER_SCREW')

    return cylinder  # ◄ CRITICAL: Send the generated solid back to the loop






def testing ():

    sonuc = power_screw(1000)
    show(sonuc)

#testing()