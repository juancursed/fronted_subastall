import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
})