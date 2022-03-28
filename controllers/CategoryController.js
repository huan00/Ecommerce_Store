const { Category } = require('../models')

const getCategory = async (req, res) => {
  try {
    const categories = await Category.find()
    res.json(categories)
  } catch (e) {
    res.status(500).json({ e: e.message })
  }
}

module.exports = {
  getCategory
}
