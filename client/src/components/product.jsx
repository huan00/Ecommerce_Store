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
        <button onClick={props.handleEdit}>Edit</button>

        <button onClick={props.handleDelete}>Delete</button>
        <button onClick={props.handleAddProduct}>Add to portfolio</button>
      </div>
    </div>
  )
}

export default Product
