/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 15:52:07
 * @LastEditors: Aee 974958672@qq.com
 * @LastEditTime: 2023-08-19 11:34:20
 * @FilePath: \blog-server\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa');
const path = require('path');
const koajwt = require('koa-jwt');
const cors = require('koa-cors');
const app = new Koa();
const config = require('./config/index');
// 路由
const routers = require('./routers/index');
// 返回数据拦截，统一格式
const responseFormatter = require('./middleware/response_formatter');
// api前缀
const { apiPrefix } = require('./config/index');
// token 校验
// const { checkToken } = require('./util/token-helper');
const log4js = require('./util/log4js');
// 中间件
const { koaBody } = require('koa-body');
const json = require('koa-json');
const logger = require('koa-logger');
const onerror = require('koa-onerror');

require('./dbhelper/db');

// koa的错误处理程序hack
onerror(app);
app.use(cors());
app.use(
	koaBody({
		// 支持文件上传
		multipart: true,
		formidable: {
			// 设置文件目录
			uploadDir: path.join(__dirname, 'public/upload/'),
			// 保持文件后缀
			keepExtensions: true,
			// 上传文件大小
			maxFieldsSize: 2 * 1024 * 1024,
			// 文件上传前设置
			onFileBegin: (name, file) => {
				console.log('🚀 ~ file: app.js:27 ~ name,file:', name, file);
			},
		},
	})
);
app.use(json());
// logger
app.use(async (ctx, next) => {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
	log4js.resLogger(ctx, ms);
});

// response formatter
app.use(responseFormatter(apiPrefix));

// koajwt
app.use(
	koajwt({
		secret: config.tokenSecret,
		// debug: true,
		// isRevoked:()=>{},// 需要一个函数来验证token的对错。这个函数有3个参数：ctx, decodedToken, token。其中 token 可以直接被验证： jsonwebtoken.verify(token)
		// passthrough: true,// 当为true时，即使在 header 中没有 authorization 也会通过这个 中间件（仅仅通过中间件的验证，没有通过 jsonwebtoken.verify）
	}).unless({
		path: [/\/user/, /\/goods/],
	})
);
// app.use(checkToken);

// routers
app.use(routers.routes()).use(routers.allowedMethods());

// 监听error
app.on('error', (err, ctx) => {
	// 在这里可以对错误信息进行一些处理，生成日志等。
	console.error('server error', err, ctx);
	log4js.errLogger(ctx, err);
});
app.listen(9090);
