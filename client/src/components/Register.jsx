import React from 'react'

const Register = (props) => {
  return (
    <div>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id='firstName' placeholder='First Name' />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="" placeholder='Last Name' />
        <label htmlFor="email">E-Mail:</label>
        <input type="text" id="email" placeholder='E-mail' />
        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" placeholder='Phone Number' />
        <label htmlFor="userName">UserName:</label>
        <input type="text" id="userName" placeholder='UserName' />
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" placeholder='Password' />
        <label htmlFor="password">Confirm Password:</label>
        <input type="text" id="password" placeholder='Confirm Password' />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register