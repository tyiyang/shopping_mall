/*
 * @Author: tanghao 974958672@qq.com
 * @Date: 2023-06-06 15:51:14
 * @LastEditors: tanghao 974958672@qq.com
 * @LastEditTime: 2023-06-06 15:51:17
 * @FilePath: \blog-server\models\blog.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// models/blog.js

const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const mongoosePaginate = require("mongoose-paginate");

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true, "必填字段"],
    }, // 标题
    content: {
      type: String,
      required: [true, "必填字段"],
    }, // 内容
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "必填字段"],
      ref: "Category",
    }, // 分类_id,根据这个id我们就能从 category 表中查找到相关数据。
    status: {
      type: Boolean,
      default: true,
    }, // 状态
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    toJSON: { virtuals: true },
  }
);

// 虚拟字段：根据_id查找对应表中的数据。
schema.virtual("categoryObj", {
  ref: "Category",
  localField: "category",
  foreignField: "_id",
  justOne: true,
});

// 自动增加版本号
/* Mongoose 仅在您使用时更新版本密钥save()。如果您使用update()，findOneAndUpdate()等等，Mongoose将不会 更新版本密钥。
作为解决方法，您可以使用以下中间件。参考 https://mongoosejs.com/docs/guide.html#versionKey */

schema.pre("findOneAndUpdate", function () {
  const update = this.getUpdate();
  if (update.__v != null) {
    delete update.__v;
  }
  const keys = ["$set", "$setOnInsert"];
  Object.keys(keys).forEach((key) => {
    if (update[key] != null && update[key].__v != null) {
      delete update[key].__v;
      if (Object.keys(update[key]).length === 0) {
        delete update[key];
      }
    }
  });
  update.$inc = update.$inc || {};
  update.$inc.__v = 1;
});

schema.plugin(mongoosePaginate);
schema.plugin(uniqueValidator);

module.exports = mongoose.model("Blog", schema);
