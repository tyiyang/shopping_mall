/*
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-16 10:02:01
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-21 10:17:03
 * @FilePath: \server\models\goods.js
 * @Description: 商品模型
 */
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const uniqueValidator = require('mongoose-unique-validator');
const schema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, '商品名称必填'],
		// 唯一值，uniqueValidator校验
		unique: true,
	},
	price: {
		type: String,
		required: [true, '商品价格必填'],
	},
	imgUrl: {
		type: String,
		required: [true, '商品图片必填'],
	},
	createTime: {
		type: Date,
		default: Date.now,
	},
	updateTime: {
		type: Date,
		default: Date.now,
	},
	status: {
		type: Number,
		default: 1,
	},
	rank: {
		type: Number,
		default: 0,
	},
	categoryType: {
		type: Number,
		default: 0,
	},
	recommend: {
		type: Number,
		default: 0,
	},
	max: Number,
	min: Number,
	shop: String,
	address: String,
	guarantee: String,
	allImgUrl: [String],
});

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
// 分页插件
schema.plugin(mongoosePaginate);
// 唯一验证器
schema.plugin(uniqueValidator);

module.exports = mongoose.model('Goods', schema);
