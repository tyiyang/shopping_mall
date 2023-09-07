<!--
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-18 11:26:43
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-09-07 10:56:41
 * @FilePath: \shopping\client\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <home-header />
  <!-- <van-pull-refresh v-model="refresh.refreshing" @refresh="onRefresh"> -->
  <!-- 轮播图 -->
  <van-swipe :autoplay="3000" indicator-color="#f86c35" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" />
    </van-swipe-item>
  </van-swipe>

  <!-- 中间导航 -->
  <ul class="nav-content">
    <li class="nav-item" v-for="item in menuList" :key="item.categoryId">
      <img :src="item.imgUrl" alt="" />
      <span>{{ item.name }}</span>
    </li>
  </ul>

  <!-- 图片导航 -->
  <div class="image-wrap" ref="imageWrap">
    <ul class="image-content">
      <li class="image-item" v-for="item in imageList" :key="item.area">
        <div class="img-color">
          <img :src="item.imgUrl" alt="" />
          <div class="color" :style="`background:${item.background}`"></div>
        </div>
        <div class="img-desc">
          <span>义务国际商贸城</span>
          <span>{{ item.area }}</span>
          <div class="smalltext">{{ item.content }}</div>
        </div>
      </li>
    </ul>
  </div>

  <goods-list />
  <!-- </van-pull-refresh> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BetterScroll from 'better-scroll'
import { getAssetsFile } from '@/utils'
import HomeHeader from '@/components/HomeHeader.vue'
import GoodsList from '@/components/GoodsList.vue'

const images = [getAssetsFile('lb1.jpg'), getAssetsFile('lb2.jpg')]
const menuList = [
  {
    name: '限时秒杀',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
    categoryId: 100001,
  },
  {
    name: '尾货清仓',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
    categoryId: 100003,
  },
  {
    name: '热卖',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
    categoryId: 100002,
  },
  {
    name: '订货通',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
    categoryId: 100004,
  },
  {
    name: '动态',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
    categoryId: 100005,
  },
  {
    name: '充值缴费',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
    categoryId: 100006,
  },
  {
    name: '9.9元拼',
    imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
    categoryId: 100007,
  },
  {
    name: '领劵',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
    categoryId: 100008,
  },
  {
    name: '省钱',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
    categoryId: 100009,
  },
  {
    name: '全部',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
    categoryId: 100010,
  },
  {
    name: '省钱',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
    categoryId: 100011,
  },
  {
    name: '全部',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
    categoryId: 100012,
  },
]
const imageList = [
  {
    area: '一区',
    content: '玩具，装饰工艺',
    imgUrl: getAssetsFile('2.png'),
    background: 'linear-gradient(100deg, rgb(38, 161, 202) 10px, rgb(99, 178, 205) 20px, rgb(160, 217, 233) 100px)',
  },
  {
    area: '一区东',
    content: '各种饰品，饰品配件',
    imgUrl: getAssetsFile('3.png'),
    background: 'linear-gradient(100deg, rgb(255, 29, 108) 10px, rgb(206, 14, 56) 20px, rgb(230, 110, 122) 100px)',
  },
  {
    area: '二区',
    content: '箱包，钟表，小家电',
    imgUrl: getAssetsFile('4.png'),
    background: 'linear-gradient(100deg, rgb(11, 178, 139) 10px, rgb(8, 171, 149) 20px, rgb(134, 237, 197) 100px)',
  },
  {
    area: '二区东',
    content: '家装五金，新能源',
    imgUrl: getAssetsFile('5.png'),
    background: 'linear-gradient(100deg, rgb(230, 146, 20) 10px, rgb(228, 165, 47) 20px, rgb(241, 213, 147) 100px)',
  },
]

// //BScroll
const imageWrap = ref() //ref获取dom结构
const initScroll = () => {
  new BetterScroll(imageWrap.value, {
    click: true,
    scrollX: true,
    scrollY: false,
    probeType: 3,
  })
}

onMounted(() => {
  initScroll()
})
</script>

<style lang="scss" scoped>
.van-swipe-item {
  width: 100%;
  margin-top: 90px;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.nav-content {
  width: 100%;
  height: 140px;
  display: grid;
  grid-template-columns: repeat(6, 16.666666%);
  grid-template-rows: 70px 70px;
  background: #f1f1f1;

  .nav-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 36px;
      height: 36px;
    }

    span {
      margin-top: 5px;
      color: #2c3e50;
      font-size: 12px;
    }
  }
}

.image-wrap {
  width: 100vw;
  height: 87px;
  background: #f1f1f1;
  white-space: nowrap;
  overflow: hidden;

  .image-content {
    display: inline-block;

    .image-item {
      display: inline-block;
      font-size: 13px;
      color: #ffffff;
      padding: 8px 8px;

      .img-color {
        width: 130px;
        height: 70px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 8%;
          z-index: 1;
        }

        .color {
          width: 100%;
          height: 100%;
          opacity: 0.7;
          z-index: 3;
          border-radius: 8%;
          margin-top: -76px;
        }
      }

      .img-desc {
        position: absolute;
        top: 12px;
        left: 22px;
        z-index: 5;
        font-size: 14px;

        span {
          display: block;
          font-weight: 800;
        }

        .smalltext {
          font-size: 5px;
          font-weight: 800;
        }
      }
    }
  }
}
</style>
