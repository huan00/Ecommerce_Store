import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Product from '../components/Product'
import ViewProduct from './ViewProduct'

const Profile = () => {
  const id = useParams()
  const user = id.id
  console.log(user)
  const [userProfile, setUserProfile] = useState()
  const [userProductId, setUserProductId] = useState()
  const [product, setProduct] = useState([])
  const [login, setLogin] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`http://localhost:3001/sellers/${id}`)
      if (!userProfile) {
        setUserProfile(res.data)
      }
      setUserProductId(res.data.product)
    }
    const getProduct = async () => {
      const res = await axios.get(
        `http://localhost:3001/products/getProductByUser/${id}`
      )

      setProduct(res.data)
    }

    getUser()
    getProduct()
  }, [])

  const deleteProduct = async (productId) => {
    const res = await axios
      .put(`http://localhost:3001/updateproduct/HuanStore`, productId)
      .then((response) => {
        console.log(response)
      })
  }

  const handleDelete = async (userId, productId) => {
    deleteProduct(productId)
  }

  const render = () => {
    {
      product.map((el) => (
        <Product {...el} handleDelete={() => handleDelete(el._id)} />
      ))
    }
  }

  return (
    <div>
      <nav>
        <Link to="/products/addproduct">
          <li>Add Product</li>
        </Link>
        <Link to="">
          <li>Edit Product</li>
        </Link>
        <Link to="">
          <li>Delete Product</li>
        </Link>
        <Link to="/products/addcategory">
          <li>Add Category</li>
        </Link>
        <Link to="/products/addbrand">
          <li>Add Brand</li>
        </Link>
      </nav>
      {product.map((el) => (
        <Product {...el} handleDelete={() => handleDelete(el._id)} />
      ))}
    </div>
  )
}

export default Profile
