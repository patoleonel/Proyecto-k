import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    base: './', // Important for Electron to load assets with file:// protocol
    root: path.join(__dirname, 'src'),
    build: {
        outDir: path.join(__dirname, 'dist'),
        emptyOutDir: true,
    },
});
