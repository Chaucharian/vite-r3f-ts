import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const isProd = process.env.NODE_ENV !== 'development'
// https://vitejs.dev/config/
export default defineConfig({
  base: isProd ? '/vite-r3f-ts/' : '',
  plugins: [react()],
  assetsInclude: ['**/*.gltf','**/*.glb'],
})
