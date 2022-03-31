const PORT = process.env.PORT || 3001
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')

const SellerController = require('./controllers/SellerController')
const ProductController = require('./controllers/ProductController')
const BrandController = require('./controllers/BrandController')
const CategoryController = require('./controllers/CategoryController')

const app = express()

app.use(express.static(`${__dirname}/client/build`))
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

app.post('/sellers/register', SellerController.createSeller)
app.get('/sellers/username/:id', SellerController.getMatchUserName)
app.get('/sellers/password/:id', SellerController.getMatchPassword)
app.put('/sellers/updateproduct/:id', SellerController.updateProductList)
app.put('/sellers/product/:id', SellerController.deleteProduct)
app.get('/sellers/productlist/:id', SellerController.getUserProductList)
app.get('/sellers/:id', SellerController.getUserName)
app.delete('/sellers/profile/:id', SellerController.deleteUserProfile)

/*********************************
 * Get Products**********
 *********************************/

app.get('/products', ProductController.getProducts)
app.get('/products/:id', ProductController.getProductById)
app.post('/products', ProductController.postProduct)
app.post('/products/postmany', ProductController.postMany)
app.put('/products/:id', ProductController.postUpdateProduct)
app.delete('/products/:id', ProductController.deleteProduct)
app.get('/products/getProductByUser/:id', ProductController.getProductByUser)

/*********************************
 * Get Brands**********
 *********************************/

app.get('/brands', BrandController.getBrands)
app.post('/brands', BrandController.postBrand)

/*********************************
 * Get Categories**********
 *********************************/

app.get('/category', CategoryController.getCategory)
app.post('/category', CategoryController.getCategory)

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
