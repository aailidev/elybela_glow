import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Warn when a chunk exceeds 500 KiB
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Split large vendors into separate cached chunks
        manualChunks: {
          // React core — changes rarely, long-lived cache
          'vendor-react': ['react', 'react-dom'],
          // GSAP — heavy, load separately
          'vendor-gsap': ['gsap'],
          // i18n stack — large, load separately
          'vendor-i18n': [
            'i18next',
            'react-i18next',
            'i18next-browser-languagedetector',
          ],
        },
      },
    },
  },
})
