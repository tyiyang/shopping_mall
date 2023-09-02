/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-08-29 09:40:51
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-08-29 10:19:27
 * @FilePath: \client\src\store\navBar.ts
 * @Description:底部导航栏控制
 *
 */
import { defineStore } from 'pinia'

const ROUTE_NAME = ['goods-id']
const useNavBarStore = defineStore('navBar', {
  state: () => {
    return {
      commonNavBar: true,
    }
  },
  actions: {
    setCommonNavBar(name: any) {
      this.commonNavBar = !ROUTE_NAME.includes(name)
    },
  },
})

export default useNavBarStore
