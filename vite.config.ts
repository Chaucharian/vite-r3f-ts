import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/vite-r3f-ts/',
  plugins: [react()],
  assetsInclude: ['**/*.gltf','**/*.glb'],
})
