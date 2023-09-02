<!--
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-08-29 10:11:34
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-08-29 10:17:30
 * @FilePath: \client\src\components\GoodsNavBar.vue
 * @Description: 
 * 
-->
<template>
  <div class="footer">
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-action-bar-icon @click="gotoCart" icon="cart-o" :badge="cart.badge ? cart.badge : ''" text="购物车" />
      <van-action-bar-icon icon="star" text="收藏" />
      <van-action-bar-button @click="addCart" type="warning" text="加入购物车" />
      <van-action-bar-button @click="goToAddCart" type="danger" text="立即购买" />
    </van-action-bar>
  </div>
</template>

<script setup lang="ts">
import useCartStore from '@/store/cart'
const cart = useCartStore()
const gotoCart = () => {}
const addCart = () => {}
const goToAddCart = () => {}
</script>

<style lang="scss" scoped></style>
