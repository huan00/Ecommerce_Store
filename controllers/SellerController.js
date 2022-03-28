const { Seller } = require('../models')

const getSellers = async (req, res) => {
  const sellers = await Seller.find()
  res.json(sellers)
}

const getSellerById = async (req, res) => {
  try {
    const { id } = req.params
    const seller = await Seller.findById(id)
    res.json(seller)
  } catch (e) {
    console.log(e.message)
    res.send('No user ID found')
  }
}

module.exports = {
  getSellers,
  getSellerById
}
