/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 15:48:42
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-06-06 16:37:52
 * @FilePath: \blog-server\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

module.exports = {
  root: true,
  globals: {
    document: true,
  },
  extends: "airbnb-base",
  rules: {
    "no-underscore-dangle": 0,
    "func-names": 0,
    "no-plusplus": 0,
    "linebreak-style": ["off", "windows"],
    quotes: [1, "signle"],
  },
};
