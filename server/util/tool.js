/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-01 09:11:55
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-17 09:23:31
 * @FilePath: \blogs\util\tools.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// util/tool.js
/**
 * @desc 检查是否为空对象
 */
exports.isEmptyObject = (obj) => Object.keys(obj).length === 0;

/**
 * @desc 常规正则校验表达式
 */
exports.validatorsExp = {
	number: /^[0-9]*$/,
	numberAndCharacter: /^[0-9a-zA-Z]+$/,
	nameLength: (n) => new RegExp(`^[\\u4E00-\\u9FA5]{${n},}$`),
	idCard: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/,
	backCard: /^([1-9]{1})(\d{15}|\d{18})$/,
	phone: /^1[3456789]\d{9}$/,
	email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
};

/**
 * @desc 常规正则校验方法
 */
exports.validatorsFun = {
	number: (val) => exports.validatorsExp.number.test(val),
	numberAndCharacter: (val) => exports.validatorsExp.numberAndCharacter.test(val),
	idCard: (val) => exports.validatorsExp.idCard.test(val),
	backCard: (val) => exports.validatorsExp.backCard.test(val),
};

/**
 * @desc 获取token
 */
exports.getTokenFromCtx = (ctx) => {
	if (ctx.header.authorization) {
		return ctx.header.authorization.replace('Bearer ', '');
	}
	return false;
};
