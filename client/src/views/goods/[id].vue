<!--
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-18 17:32:47
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-08-29 10:44:03
 * @FilePath: \client\src\views\goods\[id].vue
 * @Description: 商品详情
-->
<template>
  <header-nav-bar title="商品详情" left-arrow @click-left="handleClickToBack" />
  <!-- 商品图片展示 -->
  <van-swipe class="goods-img">
    <van-swipe-item v-for="item in goodsDetail.allImgUrl" @click="showGoodsPreview = true">
      <img v-lazy="item" alt="" />
    </van-swipe-item>

    <template #indicator="{ active }">
      <div class="custom-indicator">{{ active + 1 }}/{{ goodsDetail.allImgUrl.length }}</div>
    </template>
  </van-swipe>

  <!-- 商品详情 -->
  <div class="goods-detail">
    <div class="name van-multi-ellipsis--l2">{{ goodsDetail.name }}{{ showGoodsPreview }}</div>
    <div class="goods-detail__desc">
      <div class="price">￥{{ goodsDetail.price }}</div>
      <span class="min">{{ goodsDetail.min }}件起批</span>
    </div>
    <div class="guarantee">{{ goodsDetail.guarantee }}</div>
    <div class="goods-detail__seller">
      <div class="shop-wrap">
        <van-icon name="shop-collect-o" />
        <div class="seller-desc">
          <div class="shop">{{ goodsDetail.shop }}</div>
          <div class="address">{{ goodsDetail.address }}</div>
        </div>
      </div>
      <div class="goseller">
        <van-button plain type="warning" size="mini">进店逛逛</van-button>
      </div>
    </div>
  </div>
  <!-- 推荐商品 -->
  <goods-list />
  <goods-preview v-show="showGoodsPreview" @hidden="handle" />
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { showLoadingToast, closeToast } from 'vant'
import { getGoodsDetail } from '@/api/goods'
import HeaderNavBar from '@/components/HeaderNavBar.vue'
import GoodsList from '@/components/GoodsList.vue'
import GoodsPreview from '@/components/GoodsPreview.vue'

const route = useRoute()
const router = useRouter()
const goodsId: string = route.params.id as string
const showGoodsPreview = ref<boolean>(false)
const goodsDetail = reactive({
  allImgUrl: [],
  name: '',
  price: 0,
  min: 0,
  guarantee: '',
  shop: '',
  address: '',
})

const handle = (val: boolean) => {
  showGoodsPreview.value = val
}

/**
 * @description: 请求商品详情
 * @return {*}
 */
const fetchGoodsDetail = async () => {
  try {
    showLoadingToast('')
    const res = await getGoodsDetail({ id: goodsId })
    if (res.code === 'success') {
      const { name, price, min, guarantee, shop, address, allImgUrl } = res.result
      goodsDetail.allImgUrl = allImgUrl
      goodsDetail.name = name
      goodsDetail.price = price
      goodsDetail.min = min
      goodsDetail.guarantee = guarantee
      goodsDetail.address = address
      goodsDetail.shop = shop
    }
  } catch (error) {
    console.log('🚀 ~ file: [id].vue:26 ~ fetchGoodsDetail ~ error:', error)
  } finally {
    closeToast()
  }
}
const handleClickToBack = () => {
  router.go(-1)
}
fetchGoodsDetail()
</script>

<style lang="scss" scoped>
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.goods-img {
  img {
    width: 100%;
  }
}

.goods-detail {
  padding: 0 5px;
  color: #858585;
  font-size: xx-small;
  .name {
    color: #333;
    font-size: 15px;
  }
  &__desc {
    height: 24px;
    display: flex;
    align-items: center;
    .price {
      color: #ff0000;
      font-size: 18px;
      margin-right: 5px;
    }
    .min {
      margin-top: 2px;
    }
  }
  .guarantee {
    margin-top: 5px;
  }
  &__seller {
    margin-top: 5px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1;
    .seller-desc {
      padding: 3px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .shop-wrap {
      display: flex;
    }
    .shop {
      color: #333;
      font-size: 14px;
    }
    .van-icon-shop-collect-o {
      font-size: 40px;
      color: var(--van-nav-bar-background);
    }
  }
}
</style>
