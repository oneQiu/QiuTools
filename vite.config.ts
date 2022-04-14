import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: true,
    port: 3100
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  optimizeDeps: {
    exclude: [
      // '@alilc/lowcode-engine',
      // '@alilc/lowcode-editor-skeleton',
      // '@alilc/lowcode-editor-core',
      // '@alilc/lowcode-designer',
      // '@alilc/lowcode-engine-ext',
      // '@ali/lowcode-engine',
      // '@alifd/next',
      // 'moment',
      // 'lodash',
      // 'react',
      // 'react-dom',
      // 'prop-types'
    ]
  },
  build: {},
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: /^~/,
        replacement: ''
      }
    ]
  }
});
