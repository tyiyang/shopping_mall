/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 15:58:54
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-06-06 16:20:02
 * @FilePath: \blog-server\routers\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// routers/user.js

const router = require("koa-router")();
const controller = require("../controllers/user");

// 查
router.post("/signIn", controller.signIn);
// 增
router.post("/signUp", controller.signUp);

module.exports = router;
