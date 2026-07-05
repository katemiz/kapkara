import cadquery as cq
from cadquery.vis import show

import cad_export

cylinder_radius = 150

# 1. Base Geometry: Your centered cylinder
# cylinder = cq.Workplane("XY").cylinder(600, cylinder_radius, centered=(True, True, True)).hole(cylinder_radius-10)

cylinder = (
    cq.Workplane("XY")
    .circle(cylinder_radius) # Outer wall
    .circle(cylinder_radius-20)   # Inner wall (creates a donut profile automatically)
    .extrude(600, both=True) # Extrude 300mm up and 300mm down (centered)
)

# 2. Create an independent tool plane, rotate it 94 degrees around Z
# Then draw the hole's circle profile
tool_plane = (
    cq.Workplane("XZ")
    .transformed(rotate=(0, -5, 0)) # Change 45 to any angle (e.g., 4 or 90) to spin the hole direction
    .circle(2)
)

tool_plane2 = (
    cq.Workplane("XZ")
    .transformed(rotate=(0, 5, 0)) # Change 45 to any angle (e.g., 4 or 90) to spin the hole direction
    .circle(2)
)

holes = []
# 3. Extrude the circle symmetrically into a solid "cutting rod"
# 100mm total depth ensures it easily exceeds the 50mm diameter of your cylinder
hole1 = tool_plane.extrude(1.5*cylinder_radius, both=True, combine=False)
hole2 = tool_plane2.extrude(1.5*cylinder_radius, both=True, combine=False)


radial_hole_copy1 = hole1.translate((0, 0, 20))
radial_hole_copy2 = hole2.translate((0, 0, 20))

rotated_rod1 = radial_hole_copy1.rotate((0, 0, 0), (0, 0, 1), 90)
rotated_rod2 = radial_hole_copy2.rotate((0, 0, 0), (0, 0, 1), 90)
rotated_rod3 = hole1.rotate((0, 0, 0), (0, 0, 1), 90)
rotated_rod4 = hole2.rotate((0, 0, 0), (0, 0, 1), 90)

# 4. Perform a boolean subtraction (cut the rod out of the cylinder)
final_part = cylinder.cut(hole1)
final_part = final_part.cut(hole2)
final_part = final_part.cut(radial_hole_copy1)
final_part = final_part.cut(radial_hole_copy2)

final_part = final_part.cut(rotated_rod1)
final_part = final_part.cut(rotated_rod2)
final_part = final_part.cut(rotated_rod3)
final_part = final_part.cut(rotated_rod4)



show(final_part)

# STEP EXPORT
cad_export.exportSTEP(cylinder,'TEST','TUBE')