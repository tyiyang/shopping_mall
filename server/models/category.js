/*
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-16 10:31:37
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-16 15:06:54
 * @FilePath: \server\models\category.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const uniqueValidator = require('mongoose-unique-validator');

const schema = new mongoose.Schema(
	{
		name: {
			type: String,
			unique: true,
			required: [true, '分类 name 必填'],
		},
		value: {
			type: String,
			unique: true,
			required: [true, '分类 value 必填'],
		},
		rank: {
			type: Number,
			default: 0,
		},
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

// 自动增加版本号
/* Mongoose 仅在您使用时更新版本密钥save()。如果您使用update()，findOneAndUpdate()等等，Mongoose将不会 更新版本密钥。
作为解决方法，您可以使用以下中间件。参考 https://mongoosejs.com/docs/guide.html#versionKey */

schema.pre('findOneAndUpdate', function () {
	const update = this.getUpdate();
	if (update.__v != null) {
		delete update.__v;
	}
	const keys = ['$set', '$setOnInsert'];
	Object.keys(keys).forEach((key) => {
		if (update[key] != null && update[key].__v != null) {
			delete update[key].__v;
			if (Object.keys(update[key]).length === 0) {
				delete update[key];
			}
		}
	});
	update.$inc = update.$inc || {};
	update.$inc.__v = 1;
});

schema.plugin(mongoosePaginate);
schema.plugin(uniqueValidator);

module.exports = mongoose.model('Category', schema);
