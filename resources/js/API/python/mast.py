import sys
import json
import os
import sys
from pathlib import Path


# ◄ CRITICAL: Trick Python into using a specific folder as 'home' for Apache
os.environ['USERPROFILE'] = 'C:\\Users\\ThinkPad'
os.environ['HOME'] = 'C:\\Users\\ThinkPad'

import cadquery as cq
from cadquery.vis import show

import tubes
import payload
import base_plate 
import kama

# 1. Define your base directory path object
base_dir = Path(r"C:\Users\ThinkPad\Desktop\CADQuery")

try:
    input_data = sys.stdin.read()
    
    if input_data:
        # 1. data is a dictionary containing all keys from Svelte
        data = json.loads(input_data)

        assy_number = int(data.get("pnumber", 0))

        # 2. ◄ CRITICAL FIX: Extract the actual list of tubes from the dict
        profiles = data["mast"]["tubes"] # 'mast' is coming from svelte fetch
        product_code = data["mast"]["product_code"]
        #params = int(data["overlap"])
        overlap = int(data.get("overlap", 0))
        
        #print(f"Successfully processed {len(tubes)} tubes via stdin!")
        #print(f"dddd {profiles}")

    else:
        print("Error: Received empty stream via stdin.")

except Exception as e:
    print(f"Python Processing Error: {str(e)}")


visual_collection = [] # Ensure this list is initialized
density = 2.704e-6     # Ensure density is declared for payload_adapter

# Create an assembly container
assembly = cq.Assembly(name="Mast System")
individual_masses = {}
total_assembly_mass = 0.0







for i, profile in enumerate(profiles):

    # TUBE MODEL
    cad_tube = tubes.create_tube(profile,overlap)
    cad_tube_shifted = cad_tube.translate((0, 0, profile["extended_zb"]))
    #visual_collection.append(cad_tube_shifted) # 3. Add to our visualization list

    # MASS
    part_key = f"{assy_number}-BORU-{profile['no']}"
    volume_mm3 = cad_tube_shifted.val().Volume()
    part_mass = profile["mass_per_m"] * profile['length'] / 1000    # Density of Aluminum: 2704 kg/m³ -> 2.704e-6 kg/mm³
    individual_masses[part_key] = round(part_mass, 3) # Round to 3 decimal places
    total_assembly_mass += part_mass

    # Pass a cq.Location object to translate the tube automatically inside the assembly
    assembly.add(
        cad_tube_shifted, 
        name=part_key, 
        color=cq.Color(19/255, 19/255, 159/255)
    )


    # Check if this is the first tube (index 0)
    if i == 0:

        # PAYLOAD ADAPTER : MODEL, MASS
        payload_cad = payload.payload_adapter(profile)
        payload_cad_shifted = payload_cad.translate((0, 0, profile["extended_zt"]))

        # mass
        part_key = f"PayloadAdapter"
        volume_mm3 = payload_cad_shifted.val().Volume()
        part_mass = volume_mm3 * profile['material_density'] * 1e-9    # Density of Aluminum: 2704 kg/m³ -> 2.704e-6 kg/mm³
        individual_masses[part_key] = round(part_mass, 3) # Round to 3 decimal places
        total_assembly_mass += part_mass

        assembly.add(payload_cad_shifted, name="Payload", color=cq.Color("gray")) # Add to assembly






    # BASE
    if profile["state_name"] == 'BASE':
        base_plate = base_plate.baseAssy(profile)
        #visual_collection.append(base_plate) # 3. Add to our visualization list

        part_key = f"BASE"
        volume_mm3 = base_plate.val().Volume()
        part_mass = volume_mm3 * profile['material_density'] * 1e-9    # Density of Aluminum: 2704 kg/m³ -> 2.704e-6 kg/mm³
        individual_masses[part_key] = round(part_mass, 3) # Round to 3 decimal places
        total_assembly_mass += part_mass

        # Add parts directly, specifying their absolute location transforms
        assembly.add(base_plate, name="Base", color=cq.Color("gray"))

        flange_fname_step = base_dir / "104990-1.STEP"
        flange_step = cq.importers.importStep(str(flange_fname_step))
        flange_step_shifted = flange_step.translate((0, 0, profile["extended_zt"] -35))
        assembly.add(flange_step_shifted, name="Flange1", color=cq.Color("red"))

    # KAMALAR
    if profile["state_name"] != 'BASE':
        kama_solid,volume_mm3 = kama.kama(profile,overlap)
        #visual_collection.append(kama) # 3. Add to our visualization list

        part_key = f"KAMA{profile['no']}"
        part_mass = volume_mm3 * profile['material_density'] * 1e-9    # Density of Aluminum: 2704 kg/m³ -> 2.704e-6 kg/mm³
        individual_masses[part_key] = round(part_mass, 3) # Round to 3 decimal places
        total_assembly_mass += part_mass

        # Add parts directly, specifying their absolute location transforms
        assembly.add(kama_solid, name=f"KAMA{profile['no']}", color=cq.Color("gray"))









# Save the structured assembly
#assembly.save("structured_mast.step")


fName = product_code + ".step"
fNameGlib = product_code + ".glb"



export_path = base_dir / fName
export_pathGlib = base_dir / fNameGlib





# 2. ◄ CRITICAL FIX: Convert the Path object to a string using str()
# and pass it explicitly to the path parameter
assembly.export(path=str(export_path))
assembly.export(path=str(export_pathGlib))



# Render all items collected
# if visual_collection:
#     show(*visual_collection)

# Convert the assembly tree into a single compound body for rendering
visual_shape = assembly.toCompound()

# Show the combined shape
show(visual_shape)

# --- 5. CRITICAL: Print execution metrics as a clean JSON payload ---
response_data = {
    "success": True,
    "total_mass_kg": round(total_assembly_mass, 3),
    "parts": individual_masses,
    "file_generated": fName
}

# Print ONLY this JSON object so Laravel can capture it flawlessly
print(json.dumps(response_data))

