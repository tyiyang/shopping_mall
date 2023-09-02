/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 15:54:14
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-06-06 15:54:17
 * @FilePath: \blog-server\error\api_error_map.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// error/api_error_map.js

const ApiErrorNames = require("./api_error_name");

const ApiErrorMap = new Map();

ApiErrorMap.set(ApiErrorNames.NOT_FOUND, {
  code: ApiErrorNames.NOT_FOUND,
  message: "未找到该接口",
});
ApiErrorMap.set(ApiErrorNames.UNKNOW_ERROR, {
  code: ApiErrorNames.UNKNOW_ERROR,
  message: "未知错误",
});
ApiErrorMap.set(ApiErrorNames.LEGAL_ID, {
  code: ApiErrorNames.LEGAL_ID,
  message: "id 不合法",
});
ApiErrorMap.set(ApiErrorNames.UNEXIST_ID, {
  code: ApiErrorNames.UNEXIST_ID,
  message: "id 不存在",
});
ApiErrorMap.set(ApiErrorNames.LEGAL_FILE_TYPE, {
  code: ApiErrorNames.LEGAL_FILE_TYPE,
  message: "文件类型不允许",
});
ApiErrorMap.set(ApiErrorNames.NO_AUTH, {
  code: ApiErrorNames.NO_AUTH,
  message: "没有操作权限",
});

module.exports = ApiErrorMap;
