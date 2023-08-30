import React from 'react'
import logo from  '../assets/images/LOGO.png'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer_content'>
          <img src={logo} alt='Logo KASA' className='footer-logo'></img>
          <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}