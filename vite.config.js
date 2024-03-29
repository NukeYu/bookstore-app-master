import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 静态资源引用路径，默认为"/"
  base: './',
  build: {
    // build目录名称，默认为"dist"
    outDir: 'build',
    // 静态资源存放目录名称，默认为"assets"
    assetsDir: 'static',
  },
  server: {
    // 支持IP访问
    host: true,
    // 指定dev sever的端口号，默认为5173
    port: 3000,
    // 自动打开浏览器运行以下页面
    open: '/',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
})
