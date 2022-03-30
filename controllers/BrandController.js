const { Brand } = require('../models')

const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find()
    res.json(brands)
  } catch (e) {
    return res.status(500).json({ e: e.message })
  }
}

const postBrand = async (req, res) => {
  try {
    const brand = await new Brand(req.body)
    await brand.save()
    return res.status(201).json({ brand })
  } catch (e) {
    return res.status(500).json({ e: e.message })
  }
}

module.exports = {
  getBrands,
  postBrand
}
