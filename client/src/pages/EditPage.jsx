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
  const [updateProd, setUpdateProd] = useState({
    ...product
  })

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(`/products/${id}`)
      setProduct(res.data)
      setUpdateProd({ ...product })
    }
    getProduct()
  }, [])

  const handleName = (e) => {
    setUpdateProd({ ...updateProd, name: e.target.value })
  }
  const handlePrice = (e) => {
    setUpdateProd({ ...updateProd, price: e.target.value })
  }
  const handleDesc = (e) => {
    setUpdateProd({ ...updateProd, Desc: e.target.value })
  }
  const handleBrand = (e) => {
    setUpdateProd({ ...updateProd, Brand: e.target.value })
  }
  const handleImg = (e) => {
    setUpdateProd({ ...updateProd, img: e.target.value })
  }
  const handleCategory = (e) => {
    setUpdateProd({ ...updateProd, Category: e.target.value })
  }
  console.log(id)
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(updateProd)
    const res = await axios
      .put(`/products/${id}`, updateProd)
      .then((response) => console.log('success'))

    navigate('/')
  }

  return (
    <div>
      EditPage
      <Product {...product} style={'none'} />
      <InputProduct
        onSubmit={handleSubmit}
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
