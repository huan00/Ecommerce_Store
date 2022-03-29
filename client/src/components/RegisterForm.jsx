import React from 'react'

const RegisterForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onRegister}>
        <label htmlFor="userName">UserName:</label>
        <input
          type="text"
          id="userName"
          placeholder="UserName"
          onChange={props.handleUserName}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          placeholder="Password"
          onChange={props.handlePassword}
        />
        <label htmlFor="password">Confirm Password:</label>
        <input
          type="text"
          id="password"
          placeholder="Confirm Password"
          onChange={props.handlePassword}
        />
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          onChange={props.handleFirstName}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id=""
          placeholder="Last Name"
          onChange={props.handleLastName}
        />
        <label htmlFor="email">E-Mail:</label>
        <input
          type="text"
          id="email"
          placeholder="E-mail"
          onChange={props.handleEmail}
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="Number"
          id="phone"
          placeholder="Phone Number"
          onChange={props.handlePhone}
        />

        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          placeholder="street"
          onChange={props.handleStreet}
        />
        <label htmlFor="city">city</label>
        <input
          type="text"
          id="city"
          placeholder="city"
          onChange={props.handleCity}
        />
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          placeholder="state"
          onChange={props.handleState}
        />
        <label htmlFor="zipcode">ZipCode</label>
        <input
          type="text"
          id="zipcode"
          placeholder="zipcode"
          onChange={props.handleZipCode}
        />

        <button>Register</button>
      </form>
    </div>
  )
}

export default RegisterForm
