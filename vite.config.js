import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Base path for GitHub Pages — MUST exactly match the repo name (case-sensitive)
  base: '/Digipay-Web/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000
  }
})
