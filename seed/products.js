const db = require('../db')
const { Brand, Category, Product, Seller } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const brands = await Brand.find()
  const categories = await Category.find()

  console.log(brands)
  console.log(categories)

  const products = [
    {
      name: 'Earbuds',
      price: 19.99,
      Desc: 'best sound you will hear',
      img: 'https://m.media-amazon.com/images/I/71LcAql4+aL._AC_SX679_.jpg',
      Brand: brands[1].name,
      Category: categories[0].name
    },
    {
      name: 'Michael Wors',
      price: 299.99,
      Desc: 'Luxury with Style',
      img: 'https://m.media-amazon.com/images/I/71sMS5i3wxL._AC_UX342_.jpg',
      Brand: brands[3].name,
      Category: categories[3].name
    },
    {
      name: 'Loost fit T-Shirt',
      price: 14.99,
      Desc: 'Luxury with Style',
      img: 'https://m.media-amazon.com/images/I/71sMS5i3wxL._AC_UX342_.jpg',
      Brand: brands[3].name,
      Category: categories[3].name
    }
  ]
  await Product.insertMany(products)
  console.log('Created products')
}

const run = async () => {
  await main()
  db.close()
}

run()
