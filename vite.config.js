import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/2023.The.F2E.LEOW/' : '/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '@scss': fileURLToPath(new URL('./src/assets/scss', import.meta.url)),
    }
  }
})
