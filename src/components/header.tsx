import React from 'react'

import '../styles/header.scss'

const Header = (props) => {
  return (
    <div className="header__container">
      <div className="header-logo__container">
        <h1>
          ChatApp
        </h1>
      </div>
      { props.user &&
        <div className="header-button__container">
          <span>{props.user}</span>
          <button onClick={() => props.setUser("")}>Logout</button>
        </div>
      }
    </div>
  )
}

export default Header