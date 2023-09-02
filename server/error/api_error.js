/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 15:53:55
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-06-06 15:53:58
 * @FilePath: \blog-server\error\api_error.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// error/api_error.js

const ApiErrorMap = require("./api_error_map");

/**
 * 自定义Api异常
 */

class ApiError extends Error {
  constructor(errorName, errorMsg) {
    super();

    let errorInfo = {};
    if (errorMsg) {
      errorInfo = {
        code: errorName,
        message: errorMsg,
      };
    } else {
      errorInfo = ApiErrorMap.get(errorName);
    }

    this.name = errorName;
    this.code = errorInfo.code;
    this.message = errorInfo.message;
  }
}

module.exports = ApiError;
