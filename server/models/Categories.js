import { Schema } = require('mongoose')

const Category = new Schema(
  {
    name: {type: String, require: true}
  }
)

module.exports = Category