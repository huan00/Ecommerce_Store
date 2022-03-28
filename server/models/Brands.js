const { Schema } = require('mongoose')

const Brand = new Schema(
  {
    name: { type: String, require: true },
    location: String,
    url: String
  },
  { timestamps: true }
)

module.exports = Brand
