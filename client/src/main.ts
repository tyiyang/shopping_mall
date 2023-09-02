/*
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-15 14:29:10
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-18 15:20:07
 * @FilePath: \client\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import { setupStore } from './store'
import { setupVant } from './plugins/vant'
import router from './router/'
import App from './App.vue'
import 'normalize.css'
import './assets/styles/main.css'
const app = createApp(App)

// 配置store
setupStore(app)
// 配置vant
setupVant(app)
app.use(router)
app.mount('#app')
