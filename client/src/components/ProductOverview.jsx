import React from 'react'

const ProductOverview = (props) => {
  return (
    <div>
      <img src={props.img} alt="poster" style={{ width: '200px' }} />
      <h3>{props.name}</h3>
      <p>Price: {props.price}</p>
      <p>Brand: {props.Brand}</p>
      {/* <div>
        <button>Edit</button>
        <button>Delete</button>
      </div> */}
    </div>
  )
}

export default ProductOverview
