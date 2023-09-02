/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 16:03:16
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-21 16:06:47
 * @FilePath: \server\util\token-helper.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const jwt = require('jsonwebtoken');
const config = require('../config/index');
const tool = require('./tool');

// 生成token
const createToken = (user) => {
	const token = jwt.sign({ userId: user._id, userName: user.userName }, config.tokenSecret, {
		// 有效期两小时，如果数字类型单位为秒(s)，字符串数字则单位会被解析为毫秒(ms)
		expiresIn: '2h',
	});
	return token;
};

// 解密token返回userId,userName用来判断用户身份。
const decodeToken = (ctx) => {
	const token = tool.getTokenFromCtx(ctx);
	const userObj = jwt.decode(token, config.tokenSecret);
	return userObj;
};

// 检查token
const checkToken = async (ctx, next) => {
	const token = tool.getTokenFromCtx(ctx);
	console.log('🚀 ~ file: token-helper.js:33 ~ checkToken ~ token:', ctx.state.jwtOriginalError);
	if (token) {
		try {
			// Bearer token
			const user = jwt.verify(token, config.tokenSecret);
			console.log('🚀 ~ file: token-helper.js:36 ~ checkToken ~ user:', user, '----');
			await next();
		} catch (error) {
			ctx.status = 401;
			ctx.body = 'token 过期';
		}
	} else {
		ctx.status = 401;
		ctx.body = '无 token，请登录';
	}
	// await next();
};
// exports.checkToken = (shouldCheckPathArray, unlessCheckPathArray) => async (ctx, next) => {
// const currentUrl = ctx.request.url;
// const { method } = ctx.request;
// const unlessCheck = unlessCheckPathArray.some((url) => currentUrl.indexOf(url) > -1);
// const shouldCheck = shouldCheckPathArray.some((url) => currentUrl.indexOf(url) > -1) && method !== 'GET'
// if (shouldCheck && !unlessCheck) {
// 	const token = tool.getTokenFromCtx(ctx);
// 	if (token) {
// 		try {
// 			jwt.verify(token, config.tokenSecret);
// 			await next();
// 		} catch (error) {
// 			ctx.status = 401;
// 			ctx.body = 'token 过期';
// 		}
// 	} else {
// 		ctx.status = 401;
// 		ctx.body = '无 token，请登录';
// 	}
// } else {
// 	await next();
// }
// };

module.exports = {
	createToken,
	decodeToken,
	checkToken,
};
