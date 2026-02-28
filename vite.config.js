import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    sourcemap: false,           // no source maps in production
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,     // strip all console.* calls
        drop_debugger: true,    // strip debugger statements
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — loaded first, cached aggressively
          'vendor-react': ['react', 'react-dom'],
          // GSAP animation library — large, loaded separately
          'vendor-gsap': ['gsap'],
          // Recharts — only used in RevenueDashboardSlide
          'vendor-recharts': ['recharts'],
          // Swiper — deck navigation
          'vendor-swiper': ['swiper'],
        },
      },
    },
  },
})
