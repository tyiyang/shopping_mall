/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 15:53:16
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-16 11:12:43
 * @FilePath: \blog-server\routers\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const router = require('koa-router')();
const { apiPrefix } = require('../config/index');

const category = require('./category');
const blog = require('./blog');
const user = require('./user');

const goods = require('./goods');

router.prefix(apiPrefix);

router.use('/user', user.routes(), user.allowedMethods());
router.use('/blog', blog.routes(), blog.allowedMethods());
router.use('/category', category.routes(), category.allowedMethods());

router.use('/goods', goods.routes(), goods.allowedMethods());

module.exports = router;
