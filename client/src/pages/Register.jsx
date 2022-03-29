import RegisterForm from '../components/RegisterForm'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {
  let navigate = useNavigate()

  const [registerForm, setRegisterForm] = useState({
    name: { firstName: '', lastName: '' },
    email: '',
    phone: '',
    address: {
      stree: '',
      city: '',
      state: '',
      zipCode: ''
    },
    login: {
      userName: '',
      password: ''
    }
  })

  const handleRegister = (event) => {
    event.preventDefault()

    navigate('/profile')
  }
  return (
    <div>
      Register
      <RegisterForm handleRegister={handleRegister} />
    </div>
  )
}

export default Register
