/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 15:58:35
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-16 15:40:57
 * @FilePath: \blog-server\models\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const schema = new mongoose.Schema(
	{
		userName: {
			type: String,
			unique: true,
			required: [true, '必填字段'],
		}, // 用户名
		password: {
			type: String,
			required: [true, '必填字段'],
		}, // 密码
		createTime: {
			type: Date,
			default: Date.now,
		},
		updateTime: {
			type: Date,
			default: Date.now,
		},
	}

	// {
	// 	timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
	// }
);

schema.plugin(uniqueValidator);
module.exports = mongoose.model('User', schema);
