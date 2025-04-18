import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5178, // match Dockerfile.dev
    strictPort: true,
    host: true, // allow access from Docker or network
  },
  build: {
    outDir: 'dist', // this is default, but explicitly included for clarity
    sourcemap: true,
  },
  preview: {
    port: 8081, // match your production container EXPOSE
    host: true,
  },
})
