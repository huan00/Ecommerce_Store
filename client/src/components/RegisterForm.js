const RegisterForm = (props) => {
  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={props.onRegister} className="registerForm">
        <label htmlFor="userName"></label>
        <input
          placeholder="UserName"
          name="Username"
          required
          type="text"
          id="userName"
          onChange={props.handleUserName}
        />
        <section>
          <div className="formDiv">
            <input
              placeholder="Password"
              name="password"
              required
              type="password"
              id="password"
              className="=inputDiv"
              onChange={props.handlePassword}
            />
            <input
              placeholder="Confirm Password"
              name="confirmPassword"
              required
              type="password"
              id="confirmPassword"
              onChange={props.handlePassword}
            />
          </div>
        </section>
        <section>
          <div className="formDiv">
            <input
              placeholder="First Name"
              name="firstName"
              required
              type="text"
              id="firstName"
              onChange={props.handleFirstName}
            />
            <input
              placeholder="Last Name"
              name="lastName"
              required
              type="text"
              id=""
              onChange={props.handleLastName}
            />
          </div>
        </section>
        <label htmlFor="email"></label>
        <input
          placeholder="E-Mail"
          name="email"
          required
          type="text"
          id="email"
          onChange={props.handleEmail}
        />
        <label htmlFor="phone"></label>
        <input
          placeholder="Phone Number"
          name="phone"
          required
          type="Number"
          id="phone"
          onChange={props.handlePhone}
        />

        <label htmlFor="street"></label>
        <input
          placeholder="Street"
          name="street"
          required
          type="text"
          id="street"
          onChange={props.handleStreet}
        />
        <label htmlFor="city"></label>
        <input
          placeholder="City"
          name="city"
          required
          type="text"
          id="city"
          onChange={props.handleCity}
        />
        <label htmlFor="state"></label>
        <input
          placeholder="State"
          name="state"
          required
          type="text"
          id="state"
          onChange={props.handleState}
        />
        <label htmlFor="zipcode"></label>
        <input
          placeholder="ZipCode"
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
