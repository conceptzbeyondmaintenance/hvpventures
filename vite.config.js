import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Relative base so the build works at a custom domain root
// and at a GitHub project-pages subpath (username.github.io/repo/).
export default defineConfig({
  base: './',
  plugins: [vue()],
})
