import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../components/Product'
import '../styles/ViewProduct.css'

const ViewProduct = (props) => {
  const { id } = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    const getProductDetail = async () => {
      const res = await axios.get(`/products/${id}`)
      setProduct(res.data)
    }
    getProductDetail()
  }, [])

  return (
    <div className="ViewProduct">
      {product && (
        <Product
          img={product.img}
          name={product.name}
          price={product.price}
          Desc={product.Desc}
          Brand={product.Brand}
          Category={product.Category}
          editStyle={'none'}
          deleteStyle={'none'}
          addStyle={'none'}
        />
      )}
    </div>
  )
}

export default ViewProduct
