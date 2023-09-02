/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 15:50:44
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-06-06 15:50:47
 * @FilePath: \blog-server\dbhelper\blog.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// dbhelper/blog.js

const Model = require("../models/blog");

// TODO: 此文件中最好返回 Promise。通过 .exec() 可以返回 Promise。
// 需要注意的是 分页插件本身返回的就是 Promise 因此 Model.paginate 不需要 exec()。
// Model.create 返回的也是 Promise

const populateObj = [
  {
    path: "categoryObj",
    select: "name value",
  },
];

/**
 * 查找全部
 */
exports.findAll = () => Model.find().populate(populateObj).exec();

/**
 * 查找多个 筛选
 */
exports.findSome = (data) => {
  const {
    keyword,
    title,
    category,
    status = true,
    page = 1,
    limit = 10,
    sort = "-createdAt",
  } = data;
  const query = {};
  const options = {
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
    sort,
    populate: populateObj,
  };

  if (status !== "all") {
    query.status = status === true || status === "true";
  }

  if (title) {
    query.title = { $regex: new RegExp(title, "i") };
  }

  if (category) {
    query.category = category;
  }

  // 关键字模糊查询 标题 和 content
  if (keyword) {
    const reg = new RegExp(keyword, "i");
    const fuzzyQueryArray = [{ content: { $regex: reg } }];
    if (!title) {
      fuzzyQueryArray.push({ title: { $regex: reg } });
    }
    query.$or = fuzzyQueryArray;
  }

  return Model.paginate(query, options);
};

/**
 * 查找单个 详情
 */
exports.findById = (id) => Model.findById(id).populate(populateObj).exec();

/**
 * 新增
 */
exports.add = (data) => Model.create(data);

/**
 * 更新
 */
exports.update = (data) => {
  const { id, ...restData } = data;
  return Model.findOneAndUpdate(
    { _id: id },
    {
      ...restData,
    },
    {
      new: true, // 返回修改后的数据
    }
  ).exec();
};

/**
 * 删除
 */
exports.delete = (id) => Model.findByIdAndDelete(id).exec();
