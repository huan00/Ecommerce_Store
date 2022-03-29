import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../components/Product'
import ViewProduct from './ViewProduct'

const Profile = () => {
  const id = useParams()
  const [userProfile, setUserProfile] = useState([])
  const [userProductId, setUserProductId] = useState([])
  const [product, setProduct] = useState([])
  // const []
  const [login, setLogin] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`http://localhost:3001/sellers/${id}`)
      console.log(res)
      setUserProfile(res.data)
      setUserProductId(res.data.product)
    }

    const getList = async () => {
      userProductId.map((productId) => {
        const getProductById = async () => {
          const response = await axios.get(
            `http://localhost:3001/products/${productId}`
          )
          console.log(response)
        }
        getProductById()
      })
    }
    getUser()
    getList()
  }, [])

  console.log(userProductId)
  console.log(product)
  return (
    <div>
      Profile
      {/* {product.map((id) => ( */}
      <Product img={product.img} />
      {/* // ))} */}
    </div>
  )
}

export default Profile
