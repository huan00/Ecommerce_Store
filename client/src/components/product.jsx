import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
  return (
    <div>
      <h3>Product Name: {props.name}</h3>
      <p>Price: {props.price}</p>
      <p>Description: {props.Desc}</p>
      <p>Brand: {props.Brand}</p>
      <img src={props.img} alt="poster" style={{ width: '200px' }} />
      <p>Category: {props.Category}</p>
      <div>
        <button
          style={{ display: props.style, display: props.portStyle }}
          onClick={props.handleEdit}
        >
          Edit
        </button>

        <button
          style={{ display: props.style, display: props.portStyle }}
          onClick={props.handleDelete}
        >
          Delete
        </button>
        <button
          style={{ display: props.style }}
          onClick={props.handleAddProduct}
        >
          Add to portfolio
        </button>
      </div>
    </div>
  )
}

export default Product
