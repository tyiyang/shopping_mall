/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 15:58:13
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-06-09 10:09:50
 * @FilePath: \blog-server\dbhelper\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Model = require('../models/user');
/**
 * 查找全部
 */
// exports.signIn = () => Model.find().sort({ rank: 1 }).exec();

/**
 * 查找单个详情
 */
exports.signIn = (data) => Model.findOne(data).exec();

/**
 * 增加
 */
exports.signUp = (data) => Model.create(data);

/**
 * 更新
 */
exports.update = (data) => {
	const { id, ...restData } = data;
	return Model.findOneAndUpdate(
		{ _id: id },
		{
			...restData,
		},
		{
			new: true, // 返回修改后的数据
		}
	).exec();
};
