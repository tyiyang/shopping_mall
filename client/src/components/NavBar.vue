<!--
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-18 14:18:51
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-18 17:34:55
 * @FilePath: \client\src\components\navbar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-tabbar route v-model="active" active-color="#f86c35">
    <van-tabbar-item replace to="/home" icon="wap-home-o">主页</van-tabbar-item>
    <van-tabbar-item replace to="/category" icon="friends-o">圈子</van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="cart-o" :badge="cart.badge ? cart.badge : ''">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import useCartStore from '@/store/cart'
const cart = useCartStore()
</script>

<style lang="scss" scoped></style>
