import React from 'react'

const InputBrand = (props) => {
  return (
    <div>
      <h1>Add Brand</h1>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="brandName">Brand Name</label>
        <input
          onChange={props.handleName}
          type="text"
          id="brandName"
          placeholder="New Brand Name"
        />
        <label htmlFor="location">Brand Location:</label>
        <input
          onChange={props.handleLocation}
          type="text"
          id="location"
          placeholder="Brand Location"
        />
        <label htmlFor="url">Brand Website:</label>
        <input
          onChange={props.handleUrl}
          type="text"
          id="url"
          placeholder="Brand Website"
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InputBrand
