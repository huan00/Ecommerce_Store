import RegisterForm from '../components/RegisterForm'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import '../styles/Register.css'

const Register = () => {
  let navigate = useNavigate()

  const [registerForm, setRegisterForm] = useState({
    name: { firstName: '', lastName: '' },
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    },
    login: {
      userName: '',
      password: ''
    }
  })

  const handleFirstName = (e) => {
    e.preventDefault()
    let temp = { ...registerForm }
    let firstName = e.target.value
    temp.name.firstName = firstName
    setRegisterForm(temp)
  }
  const handleLastName = (e) => {
    e.preventDefault()
    let temp = { ...registerForm }
    let lastName = e.target.value
    temp.name.lastName = lastName
    setRegisterForm(temp)
  }
  const handleUserName = (e) => {
    e.preventDefault()
    let temp = { ...registerForm }
    let userName = e.target.value
    temp.login.userName = userName
    setRegisterForm(temp)
  }
  const handlePassword = (e) => {
    e.preventDefault()
    let temp = { ...registerForm }
    let password = e.target.value
    temp.login.password = password
    setRegisterForm(temp)
  }
  const handleEmail = (e) => {
    e.preventDefault()
    setRegisterForm({ ...registerForm, email: e.target.value })
  }
  const handlePhone = (e) => {
    e.preventDefault()
    setRegisterForm({ ...registerForm, phone: e.target.value })
  }
  const handleStreet = (e) => {
    e.preventDefault()
    let temp = { ...registerForm }
    let street = e.target.value
    temp.address.street = street
    setRegisterForm(temp)
  }
  const handleCity = (e) => {
    e.preventDefault()
    let temp = { ...registerForm }
    let city = e.target.value
    temp.address.city = city
    setRegisterForm(temp)
  }
  const handleState = (e) => {
    e.preventDefault()
    let temp = { ...registerForm }
    let state = e.target.value
    temp.address.state = state
    setRegisterForm(temp)
  }
  const handleZipCode = (e) => {
    e.preventDefault()
    let zip = e.target.value
    let temp = { ...registerForm }
    temp.address.zipCode = zip

    setRegisterForm(temp)
  }

  const onRegister = async (e) => {
    e.preventDefault()

    const res = await axios
      .post('/sellers/register', registerForm)
      .then((res) => console.log('successful'))
      .catch((err) => console.log(err.data))

    navigate('/login')
  }

  return (
    <div>
      <RegisterForm
        onRegister={onRegister}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        handleUserName={handleUserName}
        handlePhone={handlePhone}
        handleCity={handleCity}
        handleStreet={handleStreet}
        handleState={handleState}
        handleZipCode={handleZipCode}
      />
    </div>
  )
}

export default Register
