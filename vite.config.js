import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    target: 'esnext'
  },
  base: '/~thore2/robin-le-requin/',
  plugins: [react()],
})