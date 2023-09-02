/*
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-18 14:36:55
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-08-29 10:16:34
 * @FilePath: \client\src\plugins\vant.ts
 * @Description: vant
 */
import { Lazyload, Button, Badge, Tabbar, TabbarItem, PullRefresh, Swipe, SwipeItem, Icon, NavBar, ActionBar, ActionBarIcon, ActionBarButton } from 'vant'
import type { App } from 'vue'
import '@vant/touch-emulator'
import 'vant/lib/index.css'

const components = [Lazyload, Button, Badge, Tabbar, TabbarItem, PullRefresh, Swipe, SwipeItem, Icon, NavBar, ActionBar, ActionBarIcon, ActionBarButton]

export function setupVant(app: App) {
  components.forEach(component => {
    app.use(component)
  })
}
