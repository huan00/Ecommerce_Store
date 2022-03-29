const db = require('../db')
const { Brand, Category, Product, Seller } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const products = await Product.find()
  console.log(products)

  const sellers = [
    {
      name: {
        firstName: 'Huan',
        lastName: 'Zeng'
      },
      email: 'huan.zeng1@gmail.com',
      phone: 9171234567,
      address: {
        stree: '123 main st',
        city: 'NYC',
        state: 'NY',
        zipCode: '11354'
      },
      login: {
        userName: 'HuanStore',
        password: 'password'
      },
      product: [products[0]._id]
    }
  ]
  await Seller.insertMany(sellers)
  console.log('Created seller')
}

const run = async () => {
  await main()
  db.close()
}

run()
