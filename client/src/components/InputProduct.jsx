import React from 'react'

const InputProduct = (props) => {
  return (
    <div>
      Input Product
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
        <input
          onChange={props.handleBrand}
          type="text"
          id="brand"
          placeholder="Item brand"
        />
        <label htmlFor="category"></label>
        <input
          onChange={props.handleCategory}
          type="text"
          id="category"
          placeholder="category"
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InputProduct
