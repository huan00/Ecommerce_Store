const { Schema } = require('mongoose')

const Product = new Schema(
  {
    name: { type: String, require: true },
    price: { type: Number, require: true },
    Desc: { type: String },
    img: { type: String },
    Brand: [{ type: Schema.Types.Mixed, ref: 'Brand', require: false }],
    Category: [{ type: Schema.Types.Mixed, ref: 'Category', require: false }],
    Seller: []
  },
  { timestamps: true }
)

module.exports = Product
