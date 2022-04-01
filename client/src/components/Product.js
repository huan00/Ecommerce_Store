const Product = (props) => {
  return (
    <div className="product">
      <div>
        <h3> {props.name}</h3>
        <p>${props.price}</p>
        <p>{props.Desc}</p>

        <img src={props.img} alt="poster" style={{ width: '200px' }} />
      </div>
      <div>
        <div className="BrandCate">
          <p className="brand">{props.Brand}</p>
          <p className="category">{props.Category}</p>
        </div>
        <div className="controlBtn">
          <button
            style={{ display: props.editStyle }}
            onClick={props.handleEdit}
          >
            Edit
          </button>

          <button
            style={{ display: props.deleteStyle }}
            onClick={props.handleDelete}
          >
            Delete
          </button>
          <button
            style={{ display: props.addStyle }}
            onClick={props.handleAddProduct}
          >
            Add to portfolio
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
