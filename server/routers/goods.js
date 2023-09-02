/*
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-16 11:08:56
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-16 11:53:49
 * @FilePath: \server\routers\goods.js
 * @Description: 商品
 */
const router = require('koa-router')();
const controller = require('../controllers/goods');

// 列表
router.get('/list', controller.find);

// 获取详情
router.get('/detail/:id', controller.detail);

// 新增
router.post('/add', controller.add);

module.exports = router;
