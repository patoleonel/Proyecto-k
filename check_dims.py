import os
import struct

def get_image_info(file_path):
    with open(file_path, 'rb') as f:
        data = f.read(25)
        if data[:8] == b'\x89PNG\r\n\x1a\n':
            w, h = struct.unpack('>LL', data[16:24])
            return w, h
    return None, None

assets_path = r'm:\ProyectoKeila\assets_nivel1'
files_to_check = ['maria_idle.png', 'maria_run.png', 'maria_jump.png', 'super_maria_idle.png', 'super_maria_run.png']

for filename in files_to_check:
    path = os.path.join(assets_path, filename)
    if os.path.exists(path):
        w, h = get_image_info(path)
        print(f"{filename}: {w}x{h}")
    else:
        print(f"{filename} not found")
