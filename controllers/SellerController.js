const { Seller } = require('../models')

const getSellers = async (req, res) => {
  const sellers = await Seller.find()
  res.json(sellers)
}

const getUserName = async (req, res) => {
  try {
    const { id } = req.params
    const seller = await Seller.findOne({ userName: id })
    res.json(seller)
  } catch (e) {
    console.log(e.message)
    res.send('No user ID found')
  }
}

const updateProductList = async (req, res) => {
  const { id } = req.params
  const updateBody = req.body
  const updateList = await Seller.updateOne(
    { userName: id },
    { $set: { product: updateBody } }
  )
}

const getMatchUserName = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const { login } = await Seller.findOne({ userName: id })
    console.log(login)
    if (login.userName === id) {
      console.log(true)
      return res.status(201).json(login)
    } else {
      res.send(`${id}` + 'is not a valid user')
    }
  } catch (e) {
    return res.status(500).res.send({ e: e.message })
  }
}

const getMatchPassword = async (req, res) => {
  try {
    const { id } = req.params
    const { login } = await Seller.findOne({ userName: id })
    if (login.password === id) {
      return res.status(201).send('valid')
    } else {
      res.send('invalid password')
    }
  } catch (e) {
    return res.status(500).res.send({ e: e.message })
  }
}

const createSeller = async (req, res) => {
  try {
    const seller = await new Seller(req.body)
    await seller.save()
    return res.status(201).send('new seller created')
  } catch (e) {
    return res.status(500).json({ e: e.message })
  }
}

module.exports = {
  getSellers,
  getUserName,
  getMatchUserName,
  getMatchPassword,
  createSeller,
  updateProductList
}
