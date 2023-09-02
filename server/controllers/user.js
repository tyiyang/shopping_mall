/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 15:57:57
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-16 15:59:05
 * @FilePath: \blog-server\controllers\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// controllers/users.js
const dbHelper = require('../dbhelper/user');
const tokenHelper = require('../util/token-helper');
const ApiError = require('../error/api_error');
/**
 * @desc 注册
 */
exports.signUp = async (ctx) => {
	const dataObj = ctx.request.body;
	await dbHelper
		.signUp(dataObj)
		.then((res) => {
			const token = tokenHelper.createToken(res);
			const { password, ...restData } = res._doc;
			ctx.res.setHeader('Authorization', token);
			ctx.body = {
				token,
				...restData,
			};
		})
		.catch((err) => {
			throw new ApiError(err.name, err.message);
		});
};

/**
 * @desc 登录
 */
exports.signIn = async (ctx) => {
	const dataObj = ctx.request.body;

	await dbHelper
		.signIn({ userName: dataObj.userName })
		.then((res) => {
			// 账号不存在
			if (!res) {
				throw new ApiError('signIn_error1', '登陆失败');
			}
			const { _id, userName, password } = res;
			// 判断密码是否正确
			if (password !== dataObj.password) {
				throw new ApiError('signIn_error2', '登陆失败');
			}
			const token = tokenHelper.createToken(res);
			ctx.res.setHeader('Authorization', token);
			ctx.body = {
				token,
				_id,
				userName,
			};
		})
		.catch((err) => {
			throw new ApiError(err.name, err.message);
		});
};
