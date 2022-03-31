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

  return (
    <div className="InputProduct">
      <h1>Add Product</h1>
      <form onSubmit={props.handleSubmit} className="AddProductForm">
        <label htmlFor="name"></label>
        <input
          required
          onChange={props.handleName}
          type="text"
          id="name"
          placeholder="Product Name"
        />
        <label htmlFor="price"></label>
        <input
          required
          onChange={props.handlePrice}
          type="number"
          id="price"
          placeholder="Price"
        />
        <label htmlFor="Desc"></label>
        <input
          required
          onChange={props.handleDesc}
          type="text"
          id="desc"
          placeholder="Description of item"
        />
        <label htmlFor="img"></label>
        <input
          onChange={props.handleImg}
          type="text"
          id="img"
          placeholder="Image Url"
        />
        <label htmlFor="brand"></label>
        <select required id="" onChange={props.handleBrand}>
          {brand.map((bd) => (
            <option className="optionList" key={bd._id} value={bd.name}>
              {bd.name}
            </option>
          ))}
        </select>
        <label htmlFor="category"></label>
        <select required id="" onChange={props.handleCategory}>
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
