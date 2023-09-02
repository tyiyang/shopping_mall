<!--
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-19 14:11:54
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-08-29 10:49:17
 * @FilePath: \client\src\components\GoodsList.vue
 * @Description: 商品列表
-->
<template>
  <div class="goods">
    <ul class="goods-list">
      <li class="goods-list__item" v-for="goods in goodsList" :key="goods._id" @click="handleClickGoodsDetail(goods._id, goods.categoryType)">
        <img v-lazy="goods.imgUrl" :alt="goods.name" />
        <div class="goods-list__item--content">
          <div class="goods-list__item--name van-multi-ellipsis--l2">{{ goods.name }}</div>
          <div class="goods-list__item--desc">
            <div class="price">￥{{ goods.price }}</div>
            <div class="min">{{ goods.min }}个起批</div>
          </div>
          <div class="goods-list__item--shop van-ellipsis">{{ goods.shop }}</div>
          <div class="goods-list__item--addr van-ellipsis">{{ goods.address }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// import '@/data/index'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { showLoadingToast, closeToast } from 'vant'
import useGoodsStore from '@/store/goods'
import { getGoodsList } from '@/api/goods'
const router = useRouter()
const goodsList = ref([])
const goodsStore = useGoodsStore()
const fetchGoodsList = async () => {
  try {
    showLoadingToast({ message: '加载中···', forbidClick: true, duration: 0 })
    const res = await getGoodsList({ categoryType: goodsStore.goodsTypeId })
    if (res.code === 'success') {
      goodsList.value = res.result.docs || []
    }
  } catch (error) {
    console.log('🚀 ~ file: GoodsList.vue:41 ~ fetchGoodsList ~ error:', error)
  } finally {
    closeToast()
  }
}

/**
 * @description: 跳转商品详情
 * @param {*} id
 * @return {*}
 */
const handleClickGoodsDetail = (id: string, type: number) => {
  router.push({
    path: `/goods/${id}`,
    query: {
      id: type,
    },
  })
}
fetchGoodsList()

watch(
  () => goodsStore.goodsTypeId,
  () => {
    fetchGoodsList()
  },
)
</script>

<style lang="scss" scoped>
.goods {
  background: #f1f1f1;
  border-radius: 5px;
  color: #858585;
  font-size: xx-small;
  line-height: 20px;
  &-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    &__item {
      margin: 5px;
      padding: 5px;
      width: 185px;
      background: #ffffff;
      margin-bottom: 5px;
      border-radius: 5%;
      overflow: hidden;
      img {
        width: 175px;
        height: 175px;
        border-radius: 5px;
      }
      &--name {
        font-size: 12px;
        color: #333;
      }
      &--content {
      }
      &--desc {
        height: 24px;
        display: flex;
        align-items: center;
        .price {
          color: #ff0000;
          font-size: 15px;
          margin-right: 5px;
        }
        .min {
          margin-top: 2px;
        }
      }
      &--addr {
      }
    }
  }
}
</style>
