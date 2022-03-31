import React from 'react'

const Search = (props) => {
  return (
    <div className="searchBar">
      <input type="text" onChange={props.handleSearch} />
      <button type="submit">Search</button>
    </div>
  )
}

export default Search
