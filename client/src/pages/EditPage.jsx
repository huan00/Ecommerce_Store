import axios from 'axios'
import { useState } from 'react'
import InputProduct from '../components/InputProduct'
import { useNavigate } from 'react-router-dom'

const EditPage = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    Desc: '',
    Brand: '',
    img: '',
    Category: ''
  })

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
      .put(`http://localhost:3001/products/${id}`, product)
      .then((response) => console.log('success'))

    navigate('/')
  }

  return (
    <div>
      EditPage
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
