from PIL import Image
import os

FILES = ["shed_pixel.png", "beehive_pixel.png", "cloud_pixel.png", "bush_pixel.png"]
DEST_DIR = "src/assets/backgrounds"

def remove_bg_floodfill(filename):
    print(f"Processing {filename}...")
    
    if not os.path.exists(filename):
        print(f"❌ Skipped (Not found): {filename}")
        return

    try:
        img = Image.open(filename).convert("RGBA")
        width, height = img.size
        
        # Get background color from corners (assuming solid green screen)
        # We check 0,0.
        bg_color = img.getpixel((0, 0))
        print(f"   Detected BG Color: {bg_color}")
        
        tolerance = 60 # Increased tolerance slightly
        
        def is_similar(p1, p2):
            return abs(p1[0] - p2[0]) < tolerance and \
                   abs(p1[1] - p2[1]) < tolerance and \
                   abs(p1[2] - p2[2]) < tolerance

        # Queue for flood fill from all 4 corners to catch disconnected background parts
        queue = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
        visited = set(queue)
        pixels = img.load()
        
        # Flood fill
        while queue:
            x, y = queue.pop(0)
            current_color = pixels[x, y]
            
            if is_similar(current_color, bg_color):
                pixels[x, y] = (0, 0, 0, 0) # Transparent
                
                # Neighbors
                for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < width and 0 <= ny < height:
                        if (nx, ny) not in visited:
                            visited.add((nx, ny))
                            queue.append((nx, ny))

        # Save to destination
        os.makedirs(DEST_DIR, exist_ok=True)
        out_path = os.path.join(DEST_DIR, filename)
        img.save(out_path, "PNG")
        print(f"✅ Saved to {out_path}")

    except Exception as e:
        print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    print("Starting Python Asset Cleanup...")
    for f in FILES:
        remove_bg_floodfill(f)
    print("Done!")
