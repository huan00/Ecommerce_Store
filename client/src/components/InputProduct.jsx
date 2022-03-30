import axios from 'axios'
import { useEffect, useState } from 'react'

const InputProduct = (props) => {
  const [category, setCategory] = useState([])
  const [brand, setBrand] = useState([])

  useEffect(() => {
    const getCategory = async () => {
      const res = await axios.get(`http://localhost:3001/category`)
      setCategory(res.data)
    }
    const getBrand = async () => {
      const res = await axios.get(`http://localhost:3001/brands`)
      setBrand(res.data)
    }
    getCategory()
    getBrand()
  }, [])

  console.log(category)

  return (
    <div>
      {props.title}
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="name">Product Name:</label>
        <input
          onChange={props.handleName}
          type="text"
          id="name"
          placeholder="Product Name"
        />
        <label htmlFor="price">price</label>
        <input
          onChange={props.handlePrice}
          type="text"
          id="price"
          placeholder="Price"
        />
        <label htmlFor="Desc"></label>
        <input
          onChange={props.handleDesc}
          type="text"
          id="desc"
          placeholder="Description of item"
        />
        <label htmlFor="img">Image URL</label>
        <input
          onChange={props.handleImg}
          type="text"
          id="img"
          placeholder="Image Url"
        />
        <label htmlFor="brand">Brand</label>
        <select name="" id="" onChange={props.handleBrand}>
          {brand.map((bd) => (
            <option key={bd._id} value={bd.name}>
              {bd.name}
            </option>
          ))}
        </select>
        <label htmlFor="category"></label>
        <select name="" id="" onChange={props.handleCategory}>
          {category.map((cate) => (
            <option key={cate._id} value={cate.name}>
              {cate.name}
            </option>
          ))}
        </select>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default InputProduct
