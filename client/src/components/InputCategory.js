import React from 'react'

const InputCategory = (props) => {
  return (
    <div>
      <h1>Add Category</h1>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="categoryName"></label>
        <input
          type="text"
          id="categoryName"
          placeholder="Enter New Category Name"
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InputCategory
