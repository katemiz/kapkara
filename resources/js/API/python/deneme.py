import cadquery as cq
from cadquery.vis import show

import cad_export

cylinder_radius = 25

# Create a baseline cylinder (Radius = 25mm, Height = 100mm)
cylinder = cq.Workplane("XY").cylinder(100, cylinder_radius)

# Known coordinates:
angle_deg = 45.0      # Angular position on the cylinder face
z_height = 0.0       # Vertical height from the center path
hole_diameter = 6.0

rotated_wp = (
    cq.Workplane("XZ")
    .transformed(rotate=(0, 0, 30), offset=(cylinder_radius, 0, 0))
)

rotated_wp2 = (
    cq.Workplane("XZ")
    .transformed(rotate=(0, 0, -30), offset=(cylinder_radius, 0, 0))
)

# Start a fresh plane, bring the cylinder in, transform the grid, and cut
cylinder = (
    rotated_wp
    .add(cylinder)
    # .transformed(rotate=(0, 0, angle_deg), offset=(0, 0, 0))
    .moveTo(0, 0)
    .hole(hole_diameter)
)

# cylinder = (
#     rotated_wp2
#     .add(cylinder)
#     # .transformed(rotate=(0, 0, 25), offset=(0, 0, 0))
#     .moveTo(0, z_height)
#     .hole(hole_diameter)
# )

show(cylinder)

# STEP EXPORT
cad_export.exportSTEP(cylinder,'TEST','TUBE')