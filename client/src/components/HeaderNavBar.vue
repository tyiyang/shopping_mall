<!--
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-21 11:46:59
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-08-28 10:00:31
 * @FilePath: \client\src\components\HeaderNavBar.vue
 * @Description: 
 * 
-->
<template>
  <van-nav-bar :title="props.title" />
</template>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
  },
})
</script>

<style lang="scss" scoped></style>
