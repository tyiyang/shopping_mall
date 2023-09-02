/*
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-18 15:14:37
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-18 15:26:57
 * @FilePath: \client\src\store\cart.ts
 * @Description: 购物车
 */
import { defineStore } from 'pinia'

const useCartStore = defineStore('cart', {
  state: () => {
    return {
      badge: 0,
    }
  },
  actions: {},
})

export default useCartStore
