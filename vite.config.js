import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  // Served from `/` by default (Vercel/Netlify); the GitHub Pages workflow sets VITE_BASE=/webPortal/.
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  resolve: {
    alias: {
      // `@/components/...` instead of long relative paths like `../../../components/...`
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
