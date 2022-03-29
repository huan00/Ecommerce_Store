import { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'
import ProductOverview from '../components/ProductOverview'
import { Link } from 'react-router-dom'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('http://localhost:3001/products')
      setProducts(res.data)
    }
    getProducts()
  }, [])
  console.log(products)

  return (
    <div>
      Home
      {products.map((product) => (
        <Link to="/" key={product._id}>
          <ProductOverview {...product} key={product._id} />
        </Link>
      ))}
    </div>
  )
}

export default Home
