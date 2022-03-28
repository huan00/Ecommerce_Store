const { Schema } = require('mongoose')

const Seller = new Schema(
  {
    name: {
      firstName: { type: String, require: true },
      lastName: { type: String, require: true },
      email: { type: String, require: true },
      phone: { type: Number, require: true },
      address: {
        street: { type: String, require: true },
        city: { type: String, require: true },
        state: { type: String, require: true },
        zipCode: { type: Number, required: true }
      },
      userName: { type: String, require: true },
      password: { type: String, require: true },
      product: { type: Schema.Types.ObjectId, ref: 'product_id' }
    }
  },
  { timestamps: true }
)

module.exports = Seller
