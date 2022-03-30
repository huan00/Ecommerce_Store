const { Schema } = require('mongoose')

const Product = new Schema(
  {
    name: { type: String, require: true },
    price: { type: Number, require: true },
    Desc: String,
    img: String,
    Brand: [{ type: Schema.Types.Mixed, ref: 'Brand', require: true }],
    Category: [{ type: Schema.Types.Mixed, ref: 'Category', require: true }],
    Seller: []
  },
  { timestamps: true }
)

module.exports = Product
