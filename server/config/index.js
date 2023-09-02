/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-05-31 16:17:55
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-09-02 11:41:16
 * @FilePath: \server\config\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
	tokenSecret: 'Grace945H@tangyiyang',
	port: process.env.PORT || 3000,
	apiPrefix: '/api/',
	// database: 'mongodb://127.0.0.1:27017/shopping',
	database: 'mongodb://Aee:Grace945@47.97.0.231:27017/shopping?authMechanism=DEFAULT',
	// databasePro: 'mongodb://root:123456@110.110.110.110:27017/shopping', // mongodb://用户名:密码@服务器公网IP:端口/库的名称
	databasePro: '', // mongodb://用户名:密码@服务器公网IP:端口/库的名称
};
