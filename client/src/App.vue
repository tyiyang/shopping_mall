<!--
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-15 14:29:10
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-08-29 10:27:27
 * @FilePath: \client\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="page">
    <router-view #="{ Component, route }">
      <transition name="animation" mode="out-in">
        <div :key="route.path"><component :is="Component" /></div>
      </transition>
    </router-view>
    <nav-bar v-if="commonNavBar" />
    <goods-nav-bar v-else />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useNavBarStore from '@/store/navBar'
import NavBar from '@/components/NavBar.vue'
import GoodsNavBar from '@/components/GoodsNavBar.vue'
const navBarStore = useNavBarStore()
const commonNavBar = computed(() => navBarStore.commonNavBar)
</script>

<style scoped lang="scss">
html,
body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

#app {
  height: 100%;
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  color: #2c3e50;
}
.animation {
  &-enter-from,
  &-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }

  &-enter-to,
  &-leave-from {
    opacity: 1;
  }

  &-enter-active {
    transition: all 0.5s ease;
  }

  &-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.6, 0.6, 1);
  }
}
</style>
