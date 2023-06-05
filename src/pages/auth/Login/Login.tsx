import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import login from '../../../api/login'
import './Login.css'
import Registerr from '../Register/Register'

interface LoginFormValues {
  email: string
  password: string
  code: string
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const navigator = useNavigate()

  const handleSubmit = (values: any) => {
    console.log('Email:', values.email)
    console.log('Password:', values.password)
    console.log('Code:', values.code)

    navigator('/dashboard')

    const payload = {
      email: values.email,
      password: values.password,
      role: 'student',
      Enable_2FactAuth: false
    }

    login(payload).then((response) => {
      console.log('sucessfull login', response)
    }).catch((error) => {
      console.log('error', error)
    })
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
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  code: ''
                }}
                onSubmit={handleSubmit}
              >
                <Form onSubmit={handleSubmit}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-envelope" />
                      <Field
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock" />
                      <Field
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Enter your password"
                        required
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock" />
                      <Field
                        type="text"
                        name="code"
                        placeholder="Enter your code"
                        required
                      />
                      <ErrorMessage
                        name="code"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="text">
                      <Link to="/forgot-password">Forgot password?</Link>
                    </div>
                    <div className="button input-box">
                      <input type="submit" value="Submit" />
                    </div>
                    <div className="text sign-up-text">
                      Don&#x3f;t have an account&#x3f;{' '}
                      <label htmlFor="flip">Signup now</label>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
            <Registerr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
