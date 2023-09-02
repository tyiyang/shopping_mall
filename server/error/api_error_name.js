/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 15:54:57
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-06-06 15:55:00
 * @FilePath: \blog-server\error\api_error_name.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// error/api_error_name.js

const ApiErrorNames = {
  NOT_FOUND: "not_found",
  UNKNOW_ERROR: "unknow_error",
  LEGAL_ID: "legal_id",
  UNEXIST_ID: "unexist_id",
  LEGAL_FILE_TYPE: "legal_file_type",
  NO_AUTH: "no_auth",
};

module.exports = ApiErrorNames;
