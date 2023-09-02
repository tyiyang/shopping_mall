/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 15:51:45
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-06-06 16:18:54
 * @FilePath: \blog-server\routers\blog.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// routers/blog.js

const router = require("koa-router")();
const controller = require("../controllers/blog");

// 查
router.get("/", controller.find);

// 查 动态路由
router.get("/:id", controller.detail);

// 增
router.post("/", controller.add);

// 改
router.put("/:id", controller.update);

// 删
router.del("/:id", controller.delete);

module.exports = router;
