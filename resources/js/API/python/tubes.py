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
    if tube["config_suffix"] == "B":
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
    if tube["config_suffix"] != "B":

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

        # LOCK SUPPORT HOLES
        upper_hole_z = overlap - 27;
        r = tube["od"]/2
        angle = math.degrees(math.acos((2*math.pow(r,2) - 36*36) / (2*math.pow(r,2)))/2)
        
        # Then draw the hole's circle profile
        tool_plane = (
            cq.Workplane("XZ")
            .transformed(rotate=(0, -angle, 0)) 
        )

        tool_plane2 = (
            cq.Workplane("XZ")
            .transformed(rotate=(0, angle, 0)) 
        )

        hole_tool = (
            tool_plane
            .moveTo(0, upper_hole_z)
            # Extrude both ways so it punches all the way through the tube walls
            .circle(2)  # hole(10.25) creates an 10.25mm diameter, 
            .extrude(tube["od"] * 2, both=True) 
        )

        hole_tool2 = (
            tool_plane2
            .moveTo(0, upper_hole_z)
            # Extrude both ways so it punches all the way through the tube walls
            .circle(2)  # hole(10.25) creates an 10.25mm diameter, 
            .extrude(tube["od"] * 2, both=True) 
        )

        hole_tool3 = hole_tool.translate((0, 0, 15))
        hole_tool4 = hole_tool2.translate((0, 0, 15))

        rotated_hole1 = hole_tool.rotate((0, 0, 0), (0, 0, 1), 90)
        rotated_hole2 = hole_tool2.rotate((0, 0, 0), (0, 0, 1), 90)
        rotated_hole3 = hole_tool3.rotate((0, 0, 0), (0, 0, 1), 90)
        rotated_hole4 = hole_tool4.rotate((0, 0, 0), (0, 0, 1), 90)

        result = result.cut(hole_tool)
        result = result.cut(hole_tool2)
        result = result.cut(hole_tool3)
        result = result.cut(hole_tool4)

        result = result.cut(rotated_hole1)
        result = result.cut(rotated_hole2)
        result = result.cut(rotated_hole3)
        result = result.cut(rotated_hole4)


    # LOCK RECTANGULAR CUTOUTS
    if tube["config_suffix"] != "B" and tube["config_suffix"] != "T":
        tool_plane = (
            cq.Workplane("XZ")
            .rect(31, 31)
            .extrude(tube["od"])  # 1. Extrude the sharp box first
            .edges("|Y")          # 2. Select only the 4 long corner edges (parallel to Y axis)
            .fillet(4)            # 3. Apply the 4mm radius fillet to those 3D edges
        )

        # Your translation and cut logic remains exactly the same:
        rectangular_hole = tool_plane.translate((0, 0, tube["length"] - 20.5))

        rotated_hole1 = rectangular_hole.rotate((0, 0, 0), (0, 0, 1), 90)
        rotated_hole2 = rectangular_hole.rotate((0, 0, 0), (0, 0, 1), 180)
        rotated_hole3 = rectangular_hole.rotate((0, 0, 0), (0, 0, 1), 270)

        result = result.cut(rectangular_hole)
        result = result.cut(rotated_hole1)
        result = result.cut(rotated_hole2)
        result = result.cut(rotated_hole3)

    # EULER HOLES
    if tube["config_suffix"] == "T" :
        euler_plane = (
            cq.Workplane("XZ")
            .circle(10)
            .extrude(tube["od"] * 2, both=True) 
        )

        # Your translation and cut logic remains exactly the same:
        euler_hole1 = euler_plane.translate((0, 0, tube["length"] - 250))
        rotated_hole1 = euler_hole1.rotate((0, 0, 0), (0, 0, 1), 90)

        result = result.cut(euler_hole1)
        result = result.cut(rotated_hole1)


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
        "extended_zb": 100,
        "length":1000,
        "config_suffix":"T"
    }

    sonuc = create_tube(tube_data, 300)
    show(sonuc)

#testing()