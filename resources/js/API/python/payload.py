import math
import cadquery as cq
from cadquery.vis import show

import cad_export


"""
****************************************************************************************************
PAYLOAD ADAPTER
****************************************************************************************************
"""
def payload_adapter(tube):
    pass

    bolt_dia = 8
    plate_thk = 10

    no_of_holes = 1
    payload_interface_hole_dia = bolt_dia+0.25

    # Calculate the Bolt Circle Diameter (BCD)
    bolt_circle_radius = (tube["od"] + 24) / 2

    adapter_plate_r = bolt_circle_radius + 16

    for i in [3,4,5,6,8,10,12]:
        if math.pi * adapter_plate_r / i > 40 and math.pi * adapter_plate_r / i < 50:
            no_of_holes = i
            break


    # 2. Geometry Creation (Line-by-Line to avoid indentation errors)
    result = cq.Workplane("XY").circle(adapter_plate_r)
    result = result.extrude(plate_thk)
    result = result.faces(">Z").workplane()
    result = result.polarArray(
        radius=bolt_circle_radius,
        startAngle=0,
        fill=True,
        count=no_of_holes,
        angle=360.0,
    )

    result = result.hole(payload_interface_hole_dia)

    # Create the plate model from our previous step
    # (Make sure to export your actual model variable name, which was 'result')
    # result.export(r"C:\Users\ThinkPad\Desktop\CADQuery\plate.step")

    # result.export(r"C:\Users\ThinkPad\Desktop\CADQuery\plate.dxf")
    # Render the solid
    #show(result)

    # mass = result.val().Volume() * density

    #solid_volume = result.val().Volume()

    #print(f"Volume of the shape: {solid_volume} mm³")

    cad_export.exportSTEP(result,tube["no"],'PAYLOAD')


    return result  # ◄ CRITICAL: Send the generated solid back to the loop



