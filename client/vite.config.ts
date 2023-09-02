/*
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-15 14:29:10
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-19 15:04:24
 * @FilePath: \client\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import'
import Pages from 'vite-plugin-pages'
export default (command, mode) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      vue(),
      Pages({
        dirs: 'src/views',
        exclude: ['**/components/*.vue'],
      }),
      createStyleImportPlugin({
        resolves: [VantResolve()],
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: name => {
              const arr = ['show-loading-toast', 'close-toast']
              if (!arr.includes(name)) {
                return `../es/${name}/style/index.mjs`
              }
            },
          },
        ],
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 10086,
      open: true,
      cors: true,
      proxy: {
        // 使用 proxy 实例
        '/api': {
          target: 'http://localhost:9090',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: ['.js', '.json', '.ts', '.vue'], // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    css: {
      preprocessorOptions: {
        scss: {
          math: 'always',
        },
      },
    },
    optimizeDeps: {
      include: ['vant'],
    },
    build: {
      cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      sourcemap: false, // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件
      target: 'modules', // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'  还可设置为 'es2015' 'es2016'等
      chunkSizeWarningLimit: 550, // 单位kb  打包后文件大小警告的限制 (文件大于此此值会出现警告)
      assetsInlineLimit: 4096, // 单位字节（1024等于1kb） 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
      minify: 'terser', // 'terser' 相对较慢，但大多数情况下构建后的文件体积更小。'esbuild' 最小化混淆更快但构建后的文件相对更大。
      terserOptions: {
        compress: {
          drop_console: true, // 生产环境去除console
          drop_debugger: true, // 生产环境去除debugger
        },
      },
    },
  })
}
