import React from 'react'

const InputCategory = () => {
  return (
    <div>
      <h1>Add Category</h1>
      <label htmlFor="categoryName"></label>
      <input
        type="text"
        id="categoryName"
        placeholder="Enter New Category Name"
      />
      <button>Submit</button>
    </div>
  )
}

export default InputCategory
