import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../components/Product'

const ViewProduct = (props) => {
  const { id } = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    const getProductDetail = async () => {
      const res = await axios.get(`http://localhost:3001/products/${id}`)
      setProduct(res.data)
      console.log(res)
    }
    getProductDetail()
  }, [])

  console.log(product)

  return (
    <div>
      ViewProduct
      <Product
        img={product.img}
        name={product.name}
        price={product.price}
        desc={product.desc}
        Brand={product.Brand}
        Category={product.Category}
      />
    </div>
  )
}

export default ViewProduct
