import React from 'react'

import '../styles/header.scss'

function Header() {
  return (
    <div className="header__container">
      <div className="header-logo__container">
        <h1>
          ChatApp
        </h1>
      </div>
      <div className="header-button__container">
        <span>Usuario Gonorrea</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Header