from PIL import Image
import os

def analyze_sheet(path):
    print(f"Analyzing: {path}")
    if not os.path.exists(path):
        print("File not found.")
        return

    img = Image.open(path)
    width, height = img.size
    print(f"Dimensions: {width}x{height}")

    # Convert to RGBA to check alpha
    img = img.convert("RGBA")
    
    # Simple projection analysis to find empty rows/cols
    # 1. Horizontal projection (sum of alphas per row)
    empty_rows = []
    for y in range(height):
        is_empty = True
        for x in range(width):
            if img.getpixel((x, y))[3] > 10: # Threshold
                is_empty = False
                break
        if is_empty:
            empty_rows.append(y)

    # 2. Vertical projection (sum of alphas per col)
    empty_cols = []
    for x in range(width):
        is_empty = True
        for y in range(height):
            if img.getpixel((x, y))[3] > 10:
                is_empty = False
                break
        if is_empty:
            empty_cols.append(x)

    print(f"Empty Rows count: {len(empty_rows)}")
    print(f"Empty Cols count: {len(empty_cols)}")

    # Detect splits
    # A split is a sequence of empty lines between non-empty lines
    def find_splits(empty_indices, total_length):
        if not empty_indices:
            # If no empty lines found, it means the whole thing is one big block (or completely full)
            # We assume it is 1 region if we are here (simplification)
            return 1
        
        # Group consecutive indices
        # If we have a gap of empty pixels, that's a divider.
        # But wait, we just want to count "regions" of content.
        
        # Easier approach: Scan for content vs no-content transitions
        in_content = False
        regions = 0
        
        for i in range(total_length):
            is_empty = i in empty_indices
            if not in_content and not is_empty:
                in_content = True
                regions += 1
            elif in_content and is_empty:
                in_content = False
        
        return regions

    rows_regions = find_splits(set(empty_rows), height)
    cols_regions = find_splits(set(empty_cols), width)

    print(f"Detected Horizontal Regions (Rows of sprites): {rows_regions}")
    print(f"Detected Vertical Regions (Cols of sprites): {cols_regions}")
    
    if rows_regions > 0 and cols_regions > 0:
        print(f"Suggestion: sliceX={cols_regions}, sliceY={rows_regions}")
        print(f"Calculated Frame Size: {width/cols_regions:.2f} x {height/rows_regions:.2f}")

if __name__ == "__main__":
    assets_dir = r"m:\ProyectoKeila\assets_nivel1"
    files = ['maria_dead.png', 'super_maria_dead.png', 'enemy_idle.png', 'enemy_run.png', 'camelia_herida.png', 'camelia_tirando_poder.png']
    for f in files:
        analyze_sheet(os.path.join(assets_dir, f))
