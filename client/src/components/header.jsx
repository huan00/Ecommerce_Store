import { Link } from 'react-router-dom'
import '../styles/App.css'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div>
      <nav className="navBar">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
        <img src={logo} alt="logo"></img>
      </nav>
    </div>
  )
}

export default Header
