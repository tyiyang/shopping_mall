/*
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-18 17:42:08
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-21 10:07:33
 * @FilePath: \client\src\api\goods.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request/index'

interface IGetParams {}
export interface IGetRes {}
export const getGoodsList = (data: IGetParams) => {
  return request<IGetParams, IGetRes>({
    url: '/goods/list',
    method: 'get',
    data,
  })
}

export const getGoodsDetail = (data: { id: string }) => {
  return request({
    url: `/goods/detail/${data.id}`,
    method: 'get',
  })
}

export interface IAddGoodsGetParams {
  id: number
  imgUrl: string
  name: string
  price: string
  max: number
  min: number
  shop: string
  address: string
  guarantee: string
  allImgUrl: string[]
  categoryType: number
}
export const addGoods = (data: IAddGoodsGetParams) => {
  return request<IAddGoodsGetParams, IGetRes>({
    url: '/goods/add',
    method: 'post',
    data,
  })
}
