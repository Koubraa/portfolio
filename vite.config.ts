import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  base: '/portfolio/',          // 👈 IMPORTANT for project sites
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // (your aliases unchanged)
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: { target: 'esnext', outDir: 'build' },
  server: { port: 3000, open: true },
})
