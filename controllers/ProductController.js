const { Product, Seller } = require('../models')

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (e) {
    console.log(e.message)
    res.send('No product found')
  }
}

const getProductById = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const products = await Product.findById(id)
    console.log(products)
    res.json(products)
  } catch (e) {
    console.log(e.message)
    res.send('No product found')
  }
}

const getProductByUser = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const { product } = await Seller.findOne({ userName: id })
    let newPro = []
    for (i = 0; i < product.length; i++) {
      newPro = [...newPro, await Product.findById(product[i])]
    }
    res.status(200).json(newPro)

    console.log(newPro)
  } catch (e) {
    console.log(e.message)
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

const postMany = async (req, res) => {
  try {
    const product = req.body
    await Product.insertMany(product)
    return res.status(200).json(product)
  } catch (e) {
    return res.status(500).json({ e: e.message })
  }
}

const postUpdateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const updateProduct = req.body
    const products = await Product.findByIdAndUpdate(
      id,
      { $set: { updateProduct } },
      { upsert: true }
    )
    return res.status(201).json({ products })
  } catch (e) {
    return res.status(500).json({ e: e.message })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findByIdAndDelete(id)
    if (product) {
      return res.status(200).send('Product deleted')
    }
  } catch (e) {
    return res.status(500).json({ e: e.message })
  }
}

module.exports = {
  getProducts,
  postProduct,
  postUpdateProduct,
  deleteProduct,
  getProductById,
  getProductByUser,
  postMany
}
