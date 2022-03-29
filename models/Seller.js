const { Schema } = require('mongoose')

const Seller = new Schema(
  {
    name: {
      firstName: { type: String, require: true },
      lastName: { type: String, require: true }
    },
    email: { type: String, require: true },
    phone: { type: Number, require: true },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipCode: { type: Number }
    },
    login: {
      userName: { type: String, require: true },
      password: { type: String, require: true }
    },
    product: [{ type: Schema.Types.ObjectId, ref: 'product_id' }]
  },
  { timestamps: true }
)

module.exports = Seller
