import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Tp-A-adopcion-de-perritos---untref---Benjamin-Gonzalez/',
  build: {
    outDir: 'docs'
  }
})
