import React from 'react'
import '../styles/login.scss'

function Login() {
  return (
    <div className="main-container">
        <div className="content-container">
            <div className="banner-container">
                <h1>ChatApp</h1>
            </div>
            <div className="credential-container_general">
                <div className="credential-container">
                    <div className="input-container">
                        <label htmlFor="user_name" className='credential-label'>Account Id</label>
                        <input type="text" name="user_name" id="user_name" className="credential-input" />
                    </div>
                    <input type="submit" value="Login" className="credential-submit"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login