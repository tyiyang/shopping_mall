/*
 * @Author: Aee 974958672@qq.com
 * @Date: 2023-08-15 17:31:34
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-21 11:10:24
 * @FilePath: \server\controllers\goods.js
 * @Description: 商品
 */
const dbHelper = require('../dbhelper/goods');
const tool = require('../util/tool');
const ApiError = require('../error/api_error');
const ApiErrorNames = require('../error/api_error_name');

// 查找列表
const find = async (ctx) => {
	let pendding;
	const { query } = ctx;
	if (query && !tool.isEmptyObject(query)) {
		if (query?.id) {
			pendding = dbHelper.findById(query.id);
		} else {
			pendding = dbHelper.findSome(query);
		}
	} else {
		pendding = dbHelper.findAll();
	}

	try {
		const result = await pendding;
		if (result) {
			ctx.body = result;
		} else {
			throw new ApiError(ApiErrorNames.UNEXIST_ID);
		}
	} catch (error) {
		throw new ApiError(error.name, error.message);
	}
};

// 获取详情
const detail = async (ctx) => {
	const { id } = ctx.params;
	if (!tool.validatorsFun.numberAndCharacter(id)) {
		throw new ApiError(ApiErrorNames.LEGAL_ID);
	}
	try {
		const result = await dbHelper.findById(id);
		if (result) {
			ctx.body = result;
		} else {
			throw new ApiError(ApiErrorNames.UNEXIST_ID);
		}
	} catch (error) {
		throw new ApiError(error.name, error.message);
	}
};

// 添加
const add = async (ctx) => {
	const { body } = ctx.request;
	try {
		const result = await dbHelper.add(body);
		ctx.body = result;
	} catch (error) {
		throw new ApiError(error.name, error.message);
	}
};

module.exports = {
	find,
	detail,
	add,
};
