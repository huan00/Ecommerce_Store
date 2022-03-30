const { Category } = require('../models')

const getCategory = async (req, res) => {
  try {
    const categories = await Category.find()
    res.json(categories)
  } catch (e) {
    res.status(500).json({ e: e.message })
  }
}

const postCategory = async (req, res) => {
  try {
    const category = await new Category(req.body)
    await category.save()
    return res.status(201).json({ category })
  } catch (e) {
    return res.status(500).json({ e: e.message })
  }
}

module.exports = {
  getCategory,
  postCategory
}
