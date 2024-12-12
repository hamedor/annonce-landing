import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  base: "/",
  plugins: [
    viteImagemin({
      webp: {
        quality: 100,
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        second: './public/catalog.html',
      },
    },
  },
});