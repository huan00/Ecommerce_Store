import React from 'react'

const InputProduct = () => {
  return (
    <div>
      Input Product
      <label htmlFor="name">Product Name:</label>
      <input type="text" id="name" placeholder="Product Name" />
      <label htmlFor="price">price</label>
      <input type="text" id="price" placeholder="Price" />
      <label htmlFor="Desc"></label>
      <input type="text" id="desc" placeholder="Description of item" />
      <label htmlFor="img">Image URL</label>
      <input type="text" id="img" placeholder="Image Url" />
      <label htmlFor="brand">Brand</label>
      <input type="text" id="brand" placeholder="Item brand" />
      <label htmlFor="category"></label>
      <input type="text" id="category" placeholder="category" />
      <button>Submit</button>
    </div>
  )
}

export default InputProduct
