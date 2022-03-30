import { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'
import ProductOverview from '../components/ProductOverview'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import { render } from '@testing-library/react'

const Home = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('http://localhost:3001/products')
      setProducts(res.data)
    }
    getProducts()
    render(search)
  }, [search])

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }
  console.log(search)

  const filterSearch = (search) => {
    let filtered = [{}]
    products.map((product) => {
      if (product.name.toLowerCase().includes(search.toLowerCase())) {
        filtered = [...filtered, product]
      }
    })
    return filtered
  }

  const render = (search) => {
    if (!search) {
      return (
        <div>
          {products.map((product) => (
            <Link to={`/products/viewproduct/${product._id}`} key={product._id}>
              <ProductOverview {...product} key={product._id} style={'none'} />
            </Link>
          ))}
        </div>
      )
    } else if (search) {
      return (
        <div>
          {filterSearch(search).map((filter) => (
            <Link to="">
              <ProductOverview {...filter} />
            </Link>
          ))}
        </div>
      )
    }
  }

  return (
    <div>
      Home
      <Search handleSearch={handleSearch} />
      {render(search)}
      {/* {products.map((product) => (
        <Link to={`/products/viewproduct/${product._id}`} key={product._id}>
          <ProductOverview {...product} key={product._id} />
        </Link>
      ))} */}
    </div>
  )
}

export default Home
