import { Link, useNavigate } from 'react-router-dom'

const LoginForm = (props) => {
  let navigate = useNavigate()

  const linkto = () => {
    navigate('/register', { replace: true })
  }
  return (
    <div>
      <div className="login">
        <h1>Login</h1>
        <div className="formContent">
          <form onSubmit={props.handleLogin} className="loginForm">
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              placeholder="UserName"
              onChange={props.handleUserName}
            />
            <label htmlFor="password"></label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="Password"
              onChange={props.handlePassword}
            />
            <button className="loginBtn">Login</button>
          </form>
        </div>
        <div>
          <Link to="/forgotpassword" />
        </div>
      </div>
    </div>
  )
}

export default LoginForm
