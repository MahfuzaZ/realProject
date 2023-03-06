import React from 'react'
import sass from './footer.module.scss'
import logo from '../../pages/Img/logo.svg'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className={sass.footer}>
        <footer>
           <div className={sass.top}>
           <div className={sass.left}>
              <ul>
                 <Link to={'/about'}>
                  <li>About</li>
                 </Link>
                 <div className={sass.border}></div>
                 <Link to={'/products'}>
                  <li>All Products</li>
                 </Link>
                 <div className={sass.border}></div>
                 <Link to={'/categories'}>
                  <li>Categories</li>
                 </Link>
              </ul>
           </div>
           <div className={sass.center}>
             <Link to={'/'}> <img src={logo} alt="" /></Link>
           </div>
           <div className={sass.right}>
           <ul>
                 <Link to={'/comments'}>
                  <li>Comments</li>
                 </Link>
                 <div className={sass.border}></div>
                 <Link to={'/login'}>
                  <li>Login</li>
                 </Link>
                 <div className={sass.border}></div>
                 <Link to={'/contact'}>
                  <li>Contacts</li>
                 </Link>
              </ul>
           </div>
           </div>
           <div className={sass.border}></div>
           <div className={sass.bottom}>
               <div className={sass.icon}>
               <i class="fa-brands fa-instagram"></i>
               <i class="fa-brands fa-facebook"></i>
               <i class="fa-brands fa-telegram"></i>
               </div>
               <div className={sass.text}>
                 <h3>All rights reserved</h3>
               </div>
           </div>
        </footer>
    </div>
  )
}

export default Footer