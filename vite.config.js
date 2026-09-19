import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // `@/components/...` instead of long relative paths like `../../../components/...`
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
