import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="username">UserName:</label>
        <input type="text" id='username' />
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="password" />
        <button>Login</button>
        </form> 
        </div>
        <div>
          <Link to='/forgotpassword' />
        </div>
    </div>
  )
}

export default Login