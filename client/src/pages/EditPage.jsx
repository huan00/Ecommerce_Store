import axios from 'axios'
import { useEffect, useState } from 'react'
import InputProduct from '../components/InputProduct'
import { useNavigate, useParams } from 'react-router-dom'
import Product from '../components/Product'

const EditPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({
    name: '',
    price: '',
    Desc: '',
    Brand: '',
    img: '',
    Category: ''
  })
  const [updateProd, setUpdateProd] = useState()

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(`/products/${id}`)
      setProduct(res.data)
    }
    getProduct()
  }, [])

  const handleName = (e) => {
    setProduct({ ...product, name: e.target.value })
  }
  const handlePrice = (e) => {
    setProduct({ ...product, price: e.target.value })
  }
  const handleDesc = (e) => {
    setProduct({ ...product, Desc: e.target.value })
  }
  const handleBrand = (e) => {
    setProduct({ ...product, Brand: e.target.value })
  }
  const handleImg = (e) => {
    setProduct({ ...product, img: e.target.value })
  }
  const handleCategory = (e) => {
    setProduct({ ...product, Category: e.target.value })
  }

  let navigate = useNavigate()
  const handleSubmit = async (e, id) => {
    e.preventDefault()
    const res = await axios
      .put(`/products/${id}`, product)
      .then((response) => console.log('success'))

    navigate('/')
  }

  return (
    <div>
      EditPage
      <Product {...product} style={'none'} />
      <InputProduct
        handleSubmit={handleSubmit}
        handleName={handleName}
        handlePrice={handlePrice}
        handleDesc={handleDesc}
        handleBrand={handleBrand}
        handleImg={handleImg}
        handleCategory={handleCategory}
      />
    </div>
  )
}

export default EditPage
