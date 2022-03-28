const PORT = process.env.PORT || 3001
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')

const SellerController = require('./controllers/SellerController')
const ProductController = require('./controllers/ProductController')
const BrandController = require('./controllers/BrandController')
const CategoryController = require('./controllers/CategoryController')

// const { Seller, Product, Brand, Category } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('ROOT!!!')
})
/*********************************
 * Get Sellers**********
 *********************************/
app.get('/sellers', SellerController.getSellers)

app.get('/seller/:id', SellerController.getSellerById)

/*********************************
 * Get Products**********
 *********************************/

app.get('/products', ProductController.getProducts)
app.post('/products', ProductController.postProduct)
app.put('/products/:id', ProductController.postUpdateProduct)
app.delete('/products/:id', ProductController.deleteProduct)

/*********************************
 * Get Brands**********
 *********************************/

app.get('/brands', BrandController.getBrands)

/*********************************
 * Get Categories**********
 *********************************/

app.get('/category', CategoryController.getCategory)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
