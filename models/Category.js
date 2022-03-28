const { Schema } = require('mongoose')

const Category = new Schema(
  {
    name: { type: String, require: true }
  },
  { timestamps: true }
)

module.exports = Category
