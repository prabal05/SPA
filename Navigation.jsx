import React from 'react'

const Navigation = () => {
  return (
    <nav className='nav-bar'>
    <div>
  <img className="brand-logo" src="./images/brand_logo.png" alt="nike" />
    </div>
    <ul className="midseg">
        <li href="#">MENU</li>
        <li href="#" >LOCATION</li>
        <li href="#">ABOUT</li>
        <li href="#">CONTACT</li>
    </ul>

    <button className="login-btn">
        Login
    </button>
      
    </nav>
  )
}

export default Navigation
