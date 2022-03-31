import React, { useState } from 'react'
import InputBrand from '../components/InputBrand'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/AddBrand.css'

const AddBrand = () => {
  const [brand, setBrand] = useState({
    name: '',
    location: '',
    url: ''
  })

  const handleName = (e) => {
    setBrand({ ...brand, name: e.target.value })
  }
  const handleLocation = (e) => {
    setBrand({ ...brand, location: e.target.value })
  }
  const handleUrl = (e) => {
    setBrand({ ...brand, url: e.target.value })
  }
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios
      .post(`http://localhost:3001/brands`, brand)
      .then((response) => console.log('success'))

    navigate('/')
  }

  return (
    <div className="AddBrand">
      <InputBrand
        handleSubmit={handleSubmit}
        handleName={handleName}
        handleLocation={handleLocation}
        handleUrl={handleUrl}
      />
    </div>
  )
}

export default AddBrand
