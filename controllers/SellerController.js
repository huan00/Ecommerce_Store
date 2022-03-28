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

const getUserName = async (req, res) => {
  const { id } = req.params
  console.log(id)
  const { userName } = await Seller.findOne({ firstName: id })

  return res.status(201).json({ userName })
}
const getPassword = async (req, res) => {
  const { id } = req.params

  const { password } = await Seller.findOne({ userName: id })
  return res.status(201).json({ password })
}

module.exports = {
  getSellers,
  getSellerById,
  getUserName,
  getPassword
}
