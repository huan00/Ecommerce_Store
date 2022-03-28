const mongoose = require('mongoose')
const BrandSchema = require('./Brand')
const CategorySchema = require('./Category')
const ProductSchema = require('./Product')
const SellerSchema = require('./Seller')

const Brand = mongoose.model('Brand', BrandSchema)
const Category = mongoose.model('Category', CategorySchema)
const Product = mongoose.model('Product', ProductSchema)
const Seller = mongoose.model('Seller', SellerSchema)

module.exports = {
  Brand,
  Category,
  Product,
  Seller
}
