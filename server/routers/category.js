/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 15:57:29
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-16 14:55:49
 * @FilePath: \blog-server\routers\category.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// routers/category.js

const router = require('koa-router')();
const controller = require('../controllers/category');

// 查
router.get('/list', controller.find);

// 查 动态路由
router.get('/detail/:id', controller.detail);

// 增
router.post('/add', controller.add);

// 改
router.put('/update/:id', controller.update);

// 删
router.del('/delete/:id', controller.delete);

module.exports = router;
