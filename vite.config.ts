import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: ('public/index.html'),
        contact: ('public/contact.html'),
        404: ('public/404.html'),
      },
    },
  },
})