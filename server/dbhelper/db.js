/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-05-31 17:03:46
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-06-01 08:52:36
 * @FilePath: \blogs\dbhelper\db.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mongoose = require("mongoose");
const config = require("../config");

mongoose.Promise = global.Promise;

const IS_PROD = ["production", "prod", "pro"].includes(process.env.NODE_ENV);
const databaseUrl = IS_PROD ? config.databasePro : config.database;
console.log("🚀 ~ file: db.js:16 ~ databaseUrl:", databaseUrl);

/**
 *  连接数据库
 */

mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  config: {
    autoIndex: false,
  },
});

/**
 *  连接成功
 */

mongoose.connection.on("connected", () => {
  console.log(`Mongoose 连接成功: ${databaseUrl}`);
});

/**
 *  连接异常
 */

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose 连接出错: ${err}`);
});

/**
 *  连接断开
 */

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose 连接关闭！");
});

module.exports = mongoose;
