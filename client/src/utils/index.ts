/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-09-07 10:53:51
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-09-07 10:55:10
 * @FilePath: \shopping\client\src\utils\index.ts
 * @Description:
 *
 */
const getAssetsFile = (url: string) => {
  return new URL(`../assets/images/${url}`, import.meta.url).href
}
export { getAssetsFile }
