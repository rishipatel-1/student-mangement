import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import './Login.css'
import Registerr from '../Register/Register'

const Login: React.FC = () => {
  const [showPassword, setShowPassowrd] = useState(false)
  const navigator = useNavigate()

  const handleSubmit = (event: any) => {
    console.log('clicked')
    navigator('/dashboard')
    event.preventDefault()
  }

  return (
    <div className="main-container">
      <div className="container LoginContainer">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img
              src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000"
              className="frontimage"
              alt=""
            />
          </div>
          <div className="back">
            <img
              src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=2000"
              className="backimage"
              alt=""
            />
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form onSubmit={handleSubmit}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"

                    // value={password}
                    // onChange={onPasswordChange}
                    // required
                    // setIsVisited={setPasswordIsVisited}
                    // isError={passwordShouldShowError}
                    // errorText={passwordErrorText}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input
                      placeholder="Enter your code"
                    // label="Code *"
                    // type="number"
                    // value={code}
                    // onChange={onCodeChange}
                    // required
                    // setIsVisited={setcodeIsVisited}
                    // isError={codeShouldShowError}
                    // errorText={codeErrorText}
                    />
                  </div>
                  <div className="text">
                    <Link to="/forgot-password">Forgot password?</Link>
                  </div>
                  <div className="button input-box">
                    <input
                      type="submit"
                      value="Submit"
                      onClick={handleSubmit}
                    />
                  </div>
                  <div className="text sign-up-text">
                  Don&#x3f;t have an account&#x3f;{' '}
                    <label htmlFor="flip">Signup now</label>

                  </div>
                </div>
              </form>
            </div>
            <Registerr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
