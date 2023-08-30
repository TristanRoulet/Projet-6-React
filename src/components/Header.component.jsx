import React from 'react'
import logo from  '../assets/images/color-logo.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
      <NavLink to={"/"} className='header-link'>
        <img src={logo} className='header-logo' alt='logo Kasa'/>
      </NavLink>
      <nav className='header-nav'>
        <ul className='header-list'>
          <li><NavLink to={"/"} className='header-link'>Accueil</NavLink></li>
          <li><NavLink to={"/about"} className='header-link'>A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
