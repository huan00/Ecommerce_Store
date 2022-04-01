const ProductOverview = (props) => {
  return (
    <div className="ProductOverview">
      <div>
        <img
          className="ProductImg"
          src={props.img}
          alt="poster"
          style={{ width: '200px' }}
        />
      </div>
      <div>
        <h3 className="ProductName">{props.name}</h3>
      </div>
      <div>
        <p>${props.price}</p>
        <p className="brand"> {props.Brand}</p>
      </div>
    </div>
  )
}

export default ProductOverview
