from PIL import Image, ImageDraw
import sys

def remove_bg_floodfill(image_path):
    print(f"Processing {image_path} with flood fill...")
    try:
        img = Image.open(image_path).convert("RGBA")
        width, height = img.size
        
        # Get background color from top-left corner
        bg_color = img.getpixel((0, 0))
        
        # Define tolerance for color matching
        tolerance = 50 
        
        def is_similar(p1, p2):
            return abs(p1[0] - p2[0]) < tolerance and \
                   abs(p1[1] - p2[1]) < tolerance and \
                   abs(p1[2] - p2[2]) < tolerance

        # Queue for flood fill
        queue = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
        visited = set(queue)
        pixels = img.load()
        
        # Process queue
        while queue:
            x, y = queue.pop(0)
            current_color = pixels[x, y]
            
            if is_similar(current_color, bg_color):
                # Make transparent
                pixels[x, y] = (0, 0, 0, 0)
                
                # Check neighbors
                for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < width and 0 <= ny < height:
                        if (nx, ny) not in visited:
                            visited.add((nx, ny))
                            queue.append((nx, ny))

        img.save(image_path, "PNG")
        print("Done!")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python remove_bg.py <image_path>")
    else:
        remove_bg_floodfill(sys.argv[1])
