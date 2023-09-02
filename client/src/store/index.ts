/*
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-18 14:32:53
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-18 15:01:01
 * @FilePath: \client\src\store\index.ts
 * @Description: store
 */
import { createPinia } from 'pinia'
import type { App } from 'vue'

const store = createPinia()

export function setupStore(app: App) {
  app.use(store)
}

export { store }
