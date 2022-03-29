import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Products</li>
        <Link to="/register">
          <li>Register</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </nav>
    </div>
  )
}

export default Header
