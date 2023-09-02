/*
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-18 11:10:23
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-08-29 10:16:45
 * @FilePath: \client\src\router\index.ts
 * @Description: router
 */
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import routes from '~pages'
import useNavBarStore from '@/store/navBar'
console.log('🚀 ~ file: index.ts:12 ~ routes:', routes)
import 'nprogress/nprogress.css'
NProgress.configure({
  showSpinner: false,
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    ...routes,
  ],
})

router.beforeEach(to => {
  const navBarStore = useNavBarStore()
  navBarStore.setCommonNavBar(to.name)
  NProgress.start()
  return true
})

router.afterEach(() => {
  NProgress.done()
})

export default router
