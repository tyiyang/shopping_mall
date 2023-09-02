<!--
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-18 15:25:24
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-21 11:00:06
 * @FilePath: \client\src\components\HomeHeader.vue
 * @Description: 首页头部
-->
<template>
  <div class="home-header">
    <van-icon name="fire-o" />
    <div class="header-search">
      <van-icon name="search" />
      <router-link to="/search" class="search-title">
        <van-swipe class="swipe" autoplay="4000" :show-indicators="false" style="height: 200px" vertical>
          <van-swipe-item v-for="item in state.swipTitle">{{ item }}</van-swipe-item>
        </van-swipe>
      </router-link>
      <van-icon name="paid" />
    </div>
    <van-icon name="scan" />
  </div>

  <div class="nav-wrap" ref="navWrap">
    <ul class="nav-content">
      <li class="nav-item" v-for="item in navList" :key="item.id" @click="selectMenu(item.id)">
        {{ item.content }}
        <div class="sjx" :class="{ current: currentId === item.id }"></div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import BetterScroll from 'better-scroll'
import { ref, reactive, onMounted } from 'vue'
import useGoodsStore from '@/store/goods'

const state = reactive({
  swipTitle: ['夏季畅销', '精品首饰', '夏季上新', '防晒必备', '台式空调'],
})

const navList = [
  {
    id: 0,
    content: '推荐',
  },
  {
    id: 1,
    content: '玩具',
  },
  {
    id: 2,
    content: '服装服饰',
  },
  {
    id: 3,
    content: '饰品',
  },
  {
    id: 4,
    content: '百货',
  },
  {
    id: 5,
    content: '鞋靴',
  },
  {
    id: 6,
    content: '箱包',
  },
  {
    id: 7,
    content: '化妆品',
  },
  {
    id: 8,
    content: '小家电',
  },
]

//BScroll
const navWrap = ref(null) //ref获取dom结构
const initScroll = () => {
  new BetterScroll(navWrap.value, {
    click: true,
    scrollX: true,
    probeType: 3,
  })
}
onMounted(() => {
  initScroll()
})

const store = useGoodsStore()
//点菜单的某一项
let currentId = ref(0)
const selectMenu = typeId => {
  currentId.value = typeId
  store.changeId(typeId) //使点菜单的某一项的id传给pinia组件库
}
</script>

<style lang="scss" scoped>
.home-header {
  width: 100%;
  height: 50px;
  background: #f86c35;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  .van-icon-fire-o {
    color: #ffffff;
    font-size: 25px;
  }

  .van-icon-scan {
    color: #ffffff;
    font-size: 25px;
  }

  .header-search {
    width: 240px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #232326;
    background: rgba(255, 255, 255);
    border-radius: 10px;
    line-height: 20px;
    padding: 0 10px;

    .search-title {
      flex: 1;
      height: 100%;
      .swipe {
        height: 100% !important;
        line-height: 33px;
        margin-left: 5px;
        color: #5c5c5c;
      }
    }

    .van-icon-search {
      color: #9c9c9c;
      font-size: 18px;
    }

    .van-icon-paid {
      color: #9c9c9c;
      font-size: 23px;
    }

    .search {
      border-radius: 10px;
      position: relative;
    }
  }
}

.nav-wrap {
  width: 100vw;
  height: 40px;
  background: #f86c35;
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 1000;
  white-space: nowrap;
  overflow: hidden;

  .nav-content {
    display: inline-block;
    .nav-item {
      display: inline-block;
      font-size: 13px;
      color: #ffffff;
      padding: 8px 15px;

      .current {
        width: 0;
        height: 0;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        border-bottom: 8px solid rgb(255, 255, 255);
        margin: 0 auto;
      }
    }
  }
}
</style>
