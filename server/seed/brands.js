const db = require('../db')
const { Brand } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const brands = [
    {
      name: 'VisualViewport',
      location: 'Wisconsin',
      url: 'www.visualViewport.com'
    },
    {
      name: 'MeshWish',
      location: 'New York',
      url: 'www.meshwish.com'
    },
    {
      name: 'Loley',
      location: 'Ohio',
      url: 'www.loley.com'
    },
    {
      name: 'Luxury Owl',
      location: 'Texas',
      url: 'www.luxuryowl.com'
    },
    {
      name: 'ZoomSwap',
      location: 'California',
      url: 'www.zoomswap.com'
    }
  ]
  await Brand.insertyMany(brands)
  console.log('Created brands')
}

const run = async () => {
  await main()
  db.close()
}

run()
