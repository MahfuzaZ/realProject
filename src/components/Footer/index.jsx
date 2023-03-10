import React from 'react'
import sass from './footer.module.scss'
import logo from '../../pages/Img/logo.svg'
import { Link } from 'react-router-dom'
import { useMode } from '../../utils/Zustand'
function Footer() {
  const theme = useMode((state) => state.mode);
  return (
    <div className={`${theme} ${sass.footer}`}>
        <footer>
           <div className={sass.top}>
           <div className={sass.left}>
              <ul>
                 <Link className={`${theme} ${sass.a}`} to={'/about'}>
                  <li>About</li>
                 </Link>
                 <div className={sass.border}></div>
                 <Link  className={`${theme} ${sass.a}`}  to={'/products'}>
                  <li>All Products</li>
                 </Link>
                 <div className={sass.border}></div>
                 <Link  className={`${theme} ${sass.a}`}  to={'/categories'}>
                  <li>Categories</li>
                 </Link>
              </ul>
           </div>
           <div className={sass.center}>
             <Link to={'/'}> <img src={logo} alt="" /></Link>
           </div>
           <div className={sass.right}>
           <ul>
                 <Link className={`${theme} ${sass.a}`}  to={'/comments'}>
                  <li>Comments</li>
                 </Link>
                 <div className={sass.border}></div>
                 <Link className={`${theme} ${sass.a}`}  to={'/login'}>
                  <li>Login</li>
                 </Link>
                 <div className={sass.border}></div>
                 <Link className={`${theme} ${sass.a}`}  to={'/contact'}>
                  <li>Contacts</li>
                 </Link>
              </ul>
           </div>
           </div>
           <div className={sass.border}></div>
           <div className={sass.bottom}>
               <div className={sass.icon}>
                <Link  className={`${theme} ${sass.a}`}  to={''}>  <i class="fa-brands fa-instagram"></i></Link>
                <Link  className={`${theme} ${sass.a}`}  to={''}> <i class="fa-brands fa-facebook"></i></Link>
                <Link  className={`${theme} ${sass.a}`}  to={''}>  <i class="fa-brands fa-telegram"></i></Link>
               </div>
               <div className={sass.text}>
                 <h3 className={`${theme} ${sass.h3}`} >All rights reserved</h3>
               </div>
           </div>
        </footer>
    </div>
  )
}

export default Footer