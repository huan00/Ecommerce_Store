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
  try {
    const { id } = req.params
    const obj = req.body
    const seller = await Seller.findByIdAndUpdate(id, { $set: obj })
    return res.status(200).json(seller)
  } catch (e) {
    return res.status(500).json({ e: e.message })
  }
}

const getMatchUserName = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    let user = {}
    const logins = await Seller.find()
    for (let i = 0; i < logins.length; i++) {
      if (logins[i].login.userName === id) {
        user = logins[i].login
        return res.status(201).json(user)
      }
    }
    return res.send(`${id}` + 'is not a valid user')
  } catch (e) {
    return res.status(500).send({ e: e.message })
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

const deleteProduct = async (req, res) => {
  try {
    const product = req.body
    const { id } = req.params
    console.log(id)
    console.log(product)
    // const { product } = await Seller.findOne({ userName: user })
    // let index = product.indexOf(id.product)
    // product.splice(index, 1)
    // console.log(product)

    const seller = await Seller.findOneAndUpdate(
      { userName: id },
      { $set: { product } }
    )
    return res.status(200).send('success')
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
  updateProductList,
  deleteProduct
}
