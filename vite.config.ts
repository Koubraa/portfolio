import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  base: '/portfolio/',           // 👈 add this line
  build: { outDir: 'build' },
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: [
      // 👇 Strip “@version” from imports like "pkg@1.2.3" or "@scope/pkg@1.2.3"
      { find: /^(@?[^@/]+(?:\/[^@/]+)*)@\d+\.\d+\.\d+$/, replacement: '$1' },

      // your normal aliases:
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: 'react', replacement: path.resolve(__dirname, 'node_modules/react') },
      { find: 'react/jsx-runtime', replacement: path.resolve(__dirname, 'node_modules/react/jsx-runtime') }
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  build: { target: 'esnext', outDir: 'build' },
  server: { port: 3000, open: true }
})

