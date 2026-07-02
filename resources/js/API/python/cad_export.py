from pathlib import Path

def setFileName (sectionNo,partType):

    match partType:
        case "TUBE":
            return f"MT-{sectionNo}.step"
        case "BASE":
            return f"BASE-{sectionNo}.step"
        case "PAYLOAD":
            return f"PAYLOAD-{sectionNo}.step"
        case _: # ◄ The underscore acts as the default case (fallback)
            return f"PART-{sectionNo}.step"


def exportSTEP (model,sectionNo,partType) :

    # 1. Define your base directory path object
    base_dir = Path(r"C:\Users\ThinkPad\Desktop\CADQuery")

    # 3. Join them seamlessly together using the / operator
    export_path = base_dir / setFileName(sectionNo,partType)

    #print("export path", export_path)

    # 4. Export (CadQuery accepts Path objects or strings)
    model.export(str(export_path))