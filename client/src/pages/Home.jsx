import { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'
import ProductOverview from '../components/ProductOverview'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import '../styles/Home.css'

const Home = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [fakeProducts, setFakeProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('/products')
      setProducts(res.data)
    }
    getProducts()
    getFakeProduct()
    render(search)
  }, [search])

  const getFakeProduct = async () => {
    const res = await axios.get(`/products?limit=50`)
    setFakeProducts(res.data)
  }

  const updateProductList = async (newlist) => {
    const res = await axios.post(`/products/postmany`, newlist)
  }

  const convertFake = (fakeProducts) => {
    let updateList = []
    fakeProducts.map((product) => {
      updateList = [
        ...updateList,
        {
          name: product.title,
          Desc: product.description,
          price: product.price,
          img: product.image,
          Category: product.category,
          Brand: ' '
        }
      ]
    })
    return updateList
  }

  const newlist = convertFake(fakeProducts)
  console.log(newlist)
  if (products.length <= 20) {
    updateProductList(newlist)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

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
        <div className="homeProduct">
          {products.map((product) => (
            <div className="productContainer">
              <Link
                className="link"
                to={`/products/viewproduct/${product._id}`}
                key={product._id}
              >
                <ProductOverview
                  {...product}
                  key={product._id}
                  style={'none'}
                />
              </Link>
            </div>
          ))}
        </div>
      )
    } else if (search) {
      return (
        <div className="homeProduct">
          {filterSearch(search).map((filter) => (
            <div className="productContainer">
              <Link to={`/products/viewproduct/${filter._id}`} className="link">
                <ProductOverview {...filter} />
              </Link>
            </div>
          ))}
        </div>
      )
    }
  }

  return (
    <div className="homePage">
      <h1>Ninty-nine & UP</h1>
      <Search handleSearch={handleSearch} />

      {render(search)}
    </div>
  )
}

export default Home
