import React from 'react'

const InputBrand = () => {
  return (
    <div>
      <h1>Add Brand</h1>
      <form>
        <label htmlFor="brandName">Brand Name</label>
        <input type="text" id="brandName" placeholder="New Brand Name" />
        <label htmlFor="location">Brand Location:</label>
        <input type="text" id="location" placeholder="Brand Location" />
        <label htmlFor="url">Brand Website:</label>
        <input type="text" id="url" placeholder="Brand Website" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InputBrand
