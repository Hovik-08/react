import React from 'react'
import logo from "../images/logo.png"
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer-div'>
      <p>© <img src={logo} alt="logo" />-Film</p>
    </div>
  )
}

export default Footer
