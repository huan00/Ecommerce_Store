const InputBrand = (props) => {
  return (
    <div>
      <h1>Add Brand</h1>
      <form onSubmit={props.handleSubmit} className="BrandForm">
        <label htmlFor="brandName"></label>
        <input
          required
          onChange={props.handleName}
          type="text"
          id="brandName"
          placeholder="New Brand Name"
        />
        <label htmlFor="location"></label>
        <input
          required
          onChange={props.handleLocation}
          type="text"
          id="location"
          placeholder="Brand Location"
        />
        <label htmlFor="url"></label>
        <input
          required
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
