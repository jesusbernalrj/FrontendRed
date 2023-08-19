import { useState } from 'react'
import './auth.css'

export const Auth = () => {
  const [formData, setformData] = useState({
    email:'',
    password: ''
  })
  
  const [formDataRegister, setformDataRegister] = useState({
    name:'',
    email: '',
    phone: '',
    password: ''
  })
  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleFormDataRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
   setformDataRegister({
    ...formDataRegister,
    [e.target.name]: e.target.value
   })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
  }
  return (
    <>
    <title>Webleb</title>
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <form onSubmit={onSubmit}>
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log" />
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-style"
                            placeholder="Email"
                            name='email'
                            value={formData.email}
                            onChange={handleFormData}
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            className="form-style"
                            placeholder="Password"
                            name='password'
                            value={formData.password}
                            onChange={handleFormData}
                          />
                          <i className="input-icon uil uil-lock-alt" />
                        </div>
                        <input className='btn mt-4'type='submit' value='Login' />
                        <p className="mb-0 mt-4 text-center">
                          <a href="https://www.web-leb.com/code" className="link">
                            Forgot your password?
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-3 pb-3">Sign Up</h4>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-style"
                            placeholder="Full Name"
                            name='name'
                            value={formDataRegister.name}
                            onChange={handleFormDataRegister}
                          />
                          <i className="input-icon uil uil-user" />
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="tel"
                            className="form-style"
                            placeholder="Phone Number"
                            name='phone'
                            value={formDataRegister.phone}
                            onChange={handleFormDataRegister}
                          />
                          <i className="input-icon uil uil-phone" />
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="email"
                            className="form-style"
                            placeholder="Email"
                            name= 'email'
                            value={formDataRegister.email}
                            onChange={handleFormDataRegister}
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            className="form-style"
                            placeholder="Password"
                            name='password'
                            value={formDataRegister.password}
                            onChange={handleFormDataRegister}
                          />
                          <i className="input-icon uil uil-lock-alt" />
                        </div>
                        <input className='btn mt-4' type='submit' value='Register' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
