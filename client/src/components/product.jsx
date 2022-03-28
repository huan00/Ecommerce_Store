import React from 'react'

const product = (props) => {
  return (
    <div>
      <h3>Product Name: {props.name}</h3>
      <p>Price: {props.price}</p>
      <p>Description: {props.desc}</p>
      <p>Brand: {props.brand}</p>
      <p>Category: {props.category}</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default product