<!--
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-18 14:46:18
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-19 11:35:30
 * @FilePath: \client\src\views\Category.vue
 * @Description: 圈子
-->
<template>
  <div>圈子</div>
</template>

<script setup lang="ts">
import { getGoodsList } from '@/api/goods'
getGoodsList().then(res => {
  console.log('🚀 ~ file: Category.vue:16 ~ ss:', res)
})
</script>

<style scoped lang="scss"></style>
