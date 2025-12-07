from PIL import Image
import os

ASSETS_DIR = "src/assets/backgrounds"
TARGET_SIZES = {
    "shed_pixel.png": (100, 100),   # Shed needs to be bigger
    "beehive_pixel.png": (32, 32),  # Small object
    "cloud_pixel.png": (48, 24),    # Wide object
    "bush_pixel.png": (32, 32)      # Small object
}

def resize_assets():
    print("Starting Asset Resizing...")
    for filename, size in TARGET_SIZES.items():
        path = os.path.join(ASSETS_DIR, filename)
        if os.path.exists(path):
            try:
                img = Image.open(path)
                # Use NEAREST for pixel art look if downscaling significantly
                # But since these are likely high-res AI generation, standard LANCZOS might look better first, 
                # then maybe we pixelate. For now, let's just resize to fit.
                img = img.resize(size, Image.Resampling.LANCZOS)
                img.save(path)
                print(f"✅ Resized {filename} to {size}")
            except Exception as e:
                print(f"❌ Error resizing {filename}: {e}")
        else:
            print(f"⚠️  Not found: {filename}")
    print("Done!")

if __name__ == "__main__":
    resize_assets()
