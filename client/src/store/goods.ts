/*
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-18 15:27:22
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-21 10:52:54
 * @FilePath: \client\src\store\goods.ts
 * @Description: 商品
 */
import { defineStore } from 'pinia'

const useGoodsStore = defineStore('goods', {
  state: () => {
    //放响应式数据源
    return {
      goodsTypeId: 0,
    }
  },
  actions: {
    changeId(typeId: number) {
      this.goodsTypeId = typeId
    },
  },
})

export default useGoodsStore
