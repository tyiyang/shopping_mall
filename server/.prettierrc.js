/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 16:24:11
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-18 10:58:28
 * @FilePath: \blog-server\routers\.prettierrc.js
 * @Description: prettier
 */
module.exports = {
	semi: true, // 行位是否使用分号，默认为true
	trailingComma: 'es5', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
	singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
	printWidth: 200, // 一行的字符数，如果超过会进行换行，默认为80
	tabWidth: 2, // 一个tab代表几个空格数
	useTabs: true, // 启用tab缩进
	bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
	htmlWhitespaceSensitivity: 'ignore',
	endOfLine: 'auto',
};
