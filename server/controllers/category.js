/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 15:56:29
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-06-06 15:56:32
 * @FilePath: \blog-server\controllers\category.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// controllers/category.js
const dbHelper = require("../dbhelper/category");
const tool = require("../util/tool");

const ApiError = require("../error/api_error");
const ApiErrorNames = require("../error/api_error_name");

/**
 * 查
 */
exports.find = async (ctx) => {
  let result;
  const reqQuery = ctx.query;

  if (reqQuery && !tool.isEmptyObject(reqQuery)) {
    if (reqQuery.id) {
      result = dbHelper.findById(reqQuery.id);
    } else {
      result = dbHelper.findSome(reqQuery);
    }
  } else {
    result = dbHelper.findAll();
  }

  await result
    .then((res) => {
      if (res) {
        ctx.body = res;
      } else {
        throw new ApiError(ApiErrorNames.UNEXIST_ID);
      }
    })
    .catch((err) => {
      throw new ApiError(err.name, err.message);
    });
};

/**
 * 查 动态路由 id
 */
exports.detail = async (ctx) => {
  const { id } = ctx.params;
  if (!tool.validatorsFun.numberAndCharacter(id)) {
    throw new ApiError(ApiErrorNames.LEGAL_ID);
  }
  await dbHelper
    .findById(id)
    .then((res) => {
      if (res) {
        ctx.body = res;
      } else {
        throw new ApiError(ApiErrorNames.UNEXIST_ID);
      }
    })
    .catch((err) => {
      throw new ApiError(err.name, err.message);
    });
};

/**
 * 添加
 */
exports.add = async (ctx) => {
  const dataObj = ctx.request.body;

  await dbHelper
    .add(dataObj)
    .then((res) => {
      ctx.body = res;
    })
    .catch((err) => {
      throw new ApiError(err.name, err.message);
    });
};

/**
 * 更新
 */
exports.update = async (ctx) => {
  const ctxParams = ctx.params;
  // 合并 路由中的参数 以及 发送过来的参数
  // 路由参数 以及发送的参数可能都有 id 以 发送的 id 为准，如果没有，取路由中的 id
  const dataObj = { ...ctxParams, ...ctx.request.body };

  await dbHelper
    .update(dataObj)
    .then((res) => {
      if (res) {
        ctx.body = res;
      } else {
        throw new ApiError(ApiErrorNames.UNEXIST_ID);
      }
    })
    .catch((err) => {
      throw new ApiError(err.name, err.message);
    });
};

/**
 * 删除
 */
exports.delete = async (ctx) => {
  const ctxParams = ctx.params;
  // 合并 路由中的参数 以及 发送过来的参数
  // 路由参数 以及发送的参数可能都有 id 以 发送的 id 为准，如果没有，取路由中的 id
  const dataObj = { ...ctxParams, ...ctx.request.body };
  if (!tool.validatorsFun.numberAndCharacter(dataObj.id)) {
    throw new ApiError(ApiErrorNames.LEGAL_ID);
  }

  await dbHelper
    .delete(dataObj.id)
    .then((res) => {
      if (res) {
        ctx.body = res;
      } else {
        throw new ApiError(ApiErrorNames.UNEXIST_ID);
      }
    })
    .catch((err) => {
      throw new ApiError(err.name, err.message);
    });
};
