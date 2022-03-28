const { Schema } = require('mongoose')

const Product = new Schema(
  {
    name: { type: String, require: true },
    price: { type: Number, require: true },
    Desc: String,
    img: String,
    Brand: { type: Schema.Types.ObjectId, ref: 'brand_id' },
    Category: { type: Schema.Types.ObjectId, ref: 'category_id' }
  },
  { timestamps: true }
)

module.exports = Product
