import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  root: 'public',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: ('public/index.html'),
        contact: ('public/contact.html'),
        404: ('public/404.html'),
      },
    },
  },
})