import { Link } from 'react-router-dom'
import '../styles/App.css'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div>
      <nav className="navBar">
        <ul>
          <Link to="/">
            <li className="navLink">Home</li>
          </Link>
          <Link to="/register">
            <li className="navLink">Register</li>
          </Link>
          <Link to="/login">
            <li className="navLink">Login</li>
          </Link>
        </ul>
        <img src={logo} alt="logo"></img>
      </nav>
    </div>
  )
}

export default Header
