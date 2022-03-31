import LoginForm from '../components/LoginForm'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

const Login = () => {
  const [login, setLogin] = useState(false)
  const [inputLogin, setInputLogin] = useState({ userName: '', password: '' })
  const [resLogin, setResLogin] = useState({})

  let navigate = useNavigate()
  useEffect(() => {
    if (
      inputLogin.userName === resLogin.userName &&
      inputLogin.password === resLogin.password
    ) {
      navigate(`/user/profile/${inputLogin.userName}`)
    } else {
      navigate('/login')
    }
  }, [resLogin])

  const handleLogin = async (e) => {
    e.preventDefault()
    const res = await axios.get(`/sellers/username/${inputLogin.userName}`)
    setResLogin(res.data)
  }

  const handleUserName = (e) => {
    setInputLogin({ ...inputLogin, userName: e.target.value })
  }
  const handlePassword = (e) => {
    setInputLogin({ ...inputLogin, password: e.target.value })
  }

  return (
    <div>
      <LoginForm
        handleLogin={handleLogin}
        handleUserName={handleUserName}
        handlePassword={handlePassword}
      />
    </div>
  )
}

export default Login
