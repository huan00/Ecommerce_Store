const db = require('../db')
const { Category } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const categories = [
    { name: 'Electronic' },
    { name: 'Clothing' },
    { name: 'Beauty' },
    { name: 'Accessory' },
    { name: 'Game' }
  ]
  await Category.insertMany(categories)
  console.log('Created categories')
}
const run = async () => {
  await main()
  db.close()
}

run()
