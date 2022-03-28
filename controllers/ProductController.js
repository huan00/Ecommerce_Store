const { Product } = require('../models')

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (e) {
    console.log(e.message)
    res.send('No product found')
  }
}

const postProduct = async (req, res) => {
  try {
    const product = await new Product(req.body)
    await product.save()
    return res.status(201).json({ product })
  } catch (e) {
    return res.status(500).json({ e: e.message })
  }
}

module.exports = {
  getProducts,
  postProduct
}
