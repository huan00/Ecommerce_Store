import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Product from '../components/Product'
import '../styles/AddPortfolio.css'

const AddPortfolio = () => {
  const { id } = useParams()
  const [products, setProducts] = useState([])
  const [userProducts, setUserProducts] = useState([])
  const [userProductList, setUserProductList] = useState([])

  useEffect(() => {
    getProducts()
    getUserProduct()
    getUserProductList()
  }, [])

  const getProducts = async () => {
    const res = await axios.get('/products')
    setProducts(res.data)
  }
  const addProduct = async (updateList) => {
    const res = await axios.put(`/sellers/updateproduct/${id}`, updateList)
    setUserProductList(updateList.product)

    getProducts()
    getUserProduct()
    getUserProductList()
    render()
  }
  const getUserProductList = async () => {
    const res = await axios.get(`/sellers/productlist/${id}`)
    setUserProductList(res.data)
  }

  const getUserProduct = async () => {
    const res = await axios.get(`/products/getProductByUser/${id}`)
    setUserProducts(res.data)
  }

  const handleAddProduct = (pId) => {
    const updateList = { product: [...userProductList, pId] }
    addProduct(updateList)
  }

  const handleDelete = async (productId) => {
    deleteProduct(productId)
  }

  const deleteProduct = async (productId) => {
    const index = userProductList.indexOf(productId)
    setUserProductList(userProductList.splice(index, 1))
    const updateList = { product: [...userProductList] }

    const res = await axios
      .put(`/sellers/updateproduct/${id}`, updateList)
      .then((response) => {})

    getProducts()
    getUserProduct()
    getUserProductList()
    render()
  }

  let navigate = useNavigate()
  const handleEdit = (prod) => {
    navigate(`/products/edit/${prod}`)
  }

  const render = () => {
    return (
      <div className="portfolio">
        <div className="currentPort portDiv">
          <div className="portHeader">
            <h2>Current Portfolio</h2>
          </div>
          {userProducts.map((product) => (
            <Product
              {...product}
              key={product._id}
              handleDelete={() => handleDelete(product._id)}
              handleEdit={() => handleEdit(product._id)}
            />
          ))}
        </div>
        <div className="avaliablePort portDiv">
          <div className="portHeader">
            <h2>Avaliable Product</h2>
          </div>
          {products.map((product) => (
            <Product
              {...product}
              handleAddProduct={() => handleAddProduct(product._id)}
              handleDelete={() => handleDelete(product._id)}
              editStyle={'none'}
              deleteStyle={'none'}
              key={product._id}
            />
          ))}
        </div>
      </div>
    )
  }

  return <div>{render()}</div>
}

export default AddPortfolio
