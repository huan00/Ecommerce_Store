import { useState } from 'react'
import InputCategory from '../components/InputCategory'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/AddCategory.css'

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: ''
  })
  const handleCategory = (e) => {
    setCategory({ ...category, name: e.target.value })
  }

  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios
      .post(`/category`, category)
      .then((response) => console.log('success'))

    navigate('/')
  }
  return (
    <div className="AddCategory">
      <InputCategory
        handleCategory={handleCategory}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default AddCategory
