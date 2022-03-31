import React from 'react'

const RegisterForm = (props) => {
  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={props.onRegister} className="registerForm">
        <label htmlFor="userName">UserName:</label>
        <input
          name="Username"
          required
          type="text"
          id="userName"
          onChange={props.handleUserName}
        />
        <section>
          <div className="formDiv">
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              required
              type="password"
              id="password"
              onChange={props.handlePassword}
            />

            <label htmlFor="password">Confirm Password:</label>
            <input
              name="confirmPassword"
              required
              type="password"
              id="password"
              onChange={props.handlePassword}
            />
          </div>
        </section>
        <section>
          <div className="formDiv">
            <label htmlFor="firstName">First Name:</label>
            <input
              name="firstName"
              required
              type="text"
              id="firstName"
              onChange={props.handleFirstName}
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              name="lastName"
              required
              type="text"
              id=""
              onChange={props.handleLastName}
            />
          </div>
        </section>
        <label htmlFor="email">E-Mail:</label>
        <input
          name="email"
          required
          type="text"
          id="email"
          onChange={props.handleEmail}
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          name="phone"
          required
          type="Number"
          id="phone"
          onChange={props.handlePhone}
        />

        <label htmlFor="street">Street:</label>
        <input
          name="street"
          required
          type="text"
          id="street"
          onChange={props.handleStreet}
        />
        <label htmlFor="city">city:</label>
        <input
          name="city"
          required
          type="text"
          id="city"
          onChange={props.handleCity}
        />
        <label htmlFor="state">State:</label>
        <input
          name="state"
          required
          type="text"
          id="state"
          onChange={props.handleState}
        />
        <label htmlFor="zipcode">ZipCode:</label>
        <input
          name="zipCode"
          required
          type="text"
          id="zipcode"
          onChange={props.handleZipCode}
        />

        <button className="registerBtn">Register</button>
      </form>
    </div>
  )
}

export default RegisterForm
