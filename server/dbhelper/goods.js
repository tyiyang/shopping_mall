/*
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-15 17:31:40
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-21 11:16:02
 * @FilePath: \server\dbhelper\goods.js
 * @Description: 商品数据交互
 */

const Model = require('../models/goods');

// @note 此文件中最好返回 Promise 通过 .exec() 可以返回 Promise
// @note 需要注意的是 分页插件本身返回的就是 Promise 因此 Model.paginate 不需要 .exec()
// @note Model.create 返回的也是 Promise

// 查找全部
const findAll = () => Model.find().sort({ rank: 1 }).exec();

// 查找多个
const findSome = (data) => {
	const { page = 1, limit = 20, sort = 'rank', categoryType = 0 } = data;
	// const query = {};
	const options = {
		page: parseInt(page, 10),
		limit: parseInt(limit, 10),
		sort,
	};
	const result = Model.paginate({ categoryType }, options);
	return result;
};

// 查找单个详情
const findById = (id) => Model.findById(id).exec();

// 新增
const add = (data) => Model.create(data);

// 更新
const update = (data) => {
	const { id, ...restData } = data;
	const result = Model.findOneAndUpdate(
		{ _id: id },
		{
			...restData,
		},
		{
			// 返回修改后的数据
			new: true,
		}
	).exec();
	return result;
};

// 删除
const deleteOne = (id) => {
	const result = Model.findByIdAndUpdate({ _id: id }, { status: 2 }, { new: true }).exec();
	return result;
};

module.exports = {
	findAll,
	findSome,
	findById,
	add,
	update,
	deleteOne,
};
