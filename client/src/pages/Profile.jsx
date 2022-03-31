import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Product from '../components/Product'
import ViewProduct from './ViewProduct'

const Profile = () => {
  const id = useParams()
  const user = id.id

  const [userProfile, setUserProfile] = useState()
  const [userProductList, setUserProductList] = useState([])
  const [userProduct, setUserProduct] = useState([])
  const [login, setLogin] = useState(true)
  const [userId, setUserId] = useState('')

  useEffect(() => {
    getUser()
    getProduct()
  }, [])

  const getUser = async () => {
    const res = await axios.get(`http://localhost:3001/sellers/${id}`)
    setUserProfile(res.data)
    setUserProductList(res.data.product)
    setUserId(res.data._id)
  }

  const getProduct = async () => {
    const res = await axios.get(
      `http://localhost:3001/products/getProductByUser/${id}`
    )

    setUserProduct(res.data)
  }

  const deleteProduct = async (productId) => {
    const index = userProductList.indexOf(productId)
    setUserProductList(userProductList.splice(index, 1))
    const updateList = { product: [...userProductList] }
    const res = await axios
      .put(`http://localhost:3001/sellers/updateproduct/${userId}`, updateList)
      .then((response) => {
        console.log(response)
      })

    getProduct()
    getUser()
    render(userProduct)
  }

  const handleDelete = async (productId) => {
    deleteProduct(productId)
  }

  let navigate = useNavigate()
  const handleEdit = (prod) => {
    navigate(`/products/edit/${prod}`)
  }

  const render = (userProduct) => {
    return (
      <div>
        {userProduct.map((el) => (
          <Product
            {...el}
            handleDelete={() => handleDelete(el._id)}
            key={el._id}
            handleEdit={() => handleEdit(el._id)}
          />
        ))}
      </div>
    )
  }

  return (
    <div>
      <nav>
        <Link to="/products/addproduct">
          <li>Add Product</li>
        </Link>
        <Link to={`/sellers/addportfolio/${userId}`}>
          <li>Add Product to portfolio</li>
        </Link>
        <Link to="/products/addcategory">
          <li>Add Category</li>
        </Link>
        <Link to="/products/addbrand">
          <li>Add Brand</li>
        </Link>
      </nav>
      <h1>Welcome {user}</h1>
      {render(userProduct)}
    </div>
  )
}

export default Profile
