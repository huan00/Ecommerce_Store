import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
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
  const [userId, setUserId] = useState()

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`http://localhost:3001/sellers/${id}`)
      if (!userProfile) {
        setUserProfile(res.data)
        setUserId(res.data._id)
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
    let updateProduct
    if (product === 1) {
      setProduct([])
      setUserProductId([])
      updateProduct = { product: '' }
    } else {
      const pId = product.indexOf(productId)
      const pIds = userProductId.indexOf(productId)
      setUserProductId(userProductId.splice(pIds, 1))
      updateProduct = { product: [...userProductId] }
      setProduct(product.splice(pId, 1))
    }

    render(product)
    const res = await axios
      .put(
        `http://localhost:3001/sellers/updateproduct/${userId}`,
        updateProduct
      )
      .then((response) => {
        console.log(response)
      })
    console.log(updateProduct)
  }

  const handleDelete = async (userId, productId) => {
    deleteProduct(productId)
  }

  let navigate = useNavigate()
  const handleEdit = (prod) => {
    navigate(`/products/edit/${prod}`)
  }

  const render = (product) => {
    return (
      <div>
        {product.map((el) => (
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
          <li>Add product to portfolio</li>
        </Link>
        {/* <Link to="">
          <li>Delete Product</li>
        </Link> */}
        <Link to="/products/addcategory">
          <li>Add Category</li>
        </Link>
        <Link to="/products/addbrand">
          <li>Add Brand</li>
        </Link>
      </nav>
      <h1>Welcome {user}</h1>
      {render(product)}

      {/* {product.map((el) => (
        <Product {...el} handleDelete={() => handleDelete(el._id)} />
      ))} */}
    </div>
  )
}

export default Profile
