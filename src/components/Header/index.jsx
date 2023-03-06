import React from 'react'
import sass from '../Header/header.module.scss'
import logo from '../../pages/Img/logo.svg'
import { Link, NavLink } from 'react-router-dom'
function Header() {
  return (
    <div className={sass.header}>
         <header>
            <div className={sass.logo}>
               <Link to={'/'}> <img src={logo} alt="" /></Link>
            </div>
            <div className={sass.menu}>
              <ul>
                  <NavLink to={'/'}>
                    <li>Home</li>
                  </NavLink>
                  <div className={sass.border}></div>
                  <NavLink to={'/about'}>
                    <li>About</li>
                  </NavLink>
                  <div className={sass.border}></div>
                  <NavLink to={'/products'}>
                    <li>All Products</li>
                  </NavLink>
                  <div className={sass.border}></div>
                  <NavLink to={'/categories'}>
                    <li>Categories</li>
                  </NavLink>
                  <div className={sass.border}></div>
                  <NavLink to={'/comments'}>
                    <li>Comments</li>
                  </NavLink>
                  <div className={sass.border}></div>
                  <NavLink to={'/login'}>
                    <li>Login</li>
                  </NavLink>
                  <div className={sass.border}></div>
                  <NavLink to={'/contact'}>
                    <li>Contact</li>
                  </NavLink>
              </ul>
            </div>
         </header>
    </div>
  )
}

export default Header