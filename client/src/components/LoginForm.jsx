import { Link, useNavigate } from 'react-router-dom'

const LoginForm = (props) => {
  let navigate = useNavigate()

  const linkto = () => {
    navigate('/register', { replace: true })
  }
  return (
    <div>
      <div>
        <h1>Login</h1>
        <form onSubmit={props.handleLogin}>
          <label htmlFor="username">UserName:</label>
          <input type="text" id="username" onChange={props.handleUserName} />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            id="password"
            onChange={props.handlePassword}
          />
          <button>Login</button>
        </form>
      </div>
      <div>
        <Link to="/forgotpassword" />
      </div>
    </div>
  )
}

export default LoginForm
