import React from 'react'
import sass from '../Header/header.module.scss'
import logo from '../../pages/Img/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import menu from '../../pages/Img/Menu.svg'
import { Button, Dropdown } from 'antd';
import { useRef } from 'react'
import { useMode } from '../../utils/Zustand'
function Header() {
  const theme = useMode((state) => state.mode);
  const changeTheme = useMode((state) => state.changeMode);
  const bar = useRef()
  const smooth = useRef()
  const toggle =()=>{
     bar.current.classList.toggle(sass.right)
     smooth.current.classList.toggle(sass.right)
     console.log(true);
  }
 

  const items = [
    {
      key: '1',
      label: (
        <i onClick={changeTheme} class="fa-solid fa-moon"></i>
      ),
    },
    {
      key: '2',
      label: (
        <i class="fa-solid fa-language"></i>
      ),
    },
    // {
    //   key: '3',
    //   label: (
    //     <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
    //       3rd menu item
    //     </a>
    //   ),
    // },
  ];
  const App = () => (
    <>

      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        arrow
      >
        <Button> <i class="fa-solid fa-gear"></i></Button>
      </Dropdown>
      <br />
    </>
  );

  return (
    <div className={`${theme} ${ sass.header}`}>
         <header>
            <div className={sass.logo}>
               <Link to={'/'}> <img src={logo} alt="" /></Link>
            </div>
            <div className={`${theme} ${ sass.menu}`}>
              <ul>
                  <NavLink  className={`${theme} ${ sass.a}`}  to={'/'}>
                    <li>Home</li>
                  </NavLink>
                  <div className={sass.border}></div>
                  <NavLink className={`${theme} ${ sass.a}`} to={'/about'}>
                    <li>About</li>
                  </NavLink>
                  <div className={sass.border}></div>
                  <NavLink  className={`${theme} ${ sass.a}`}  to={'/products'}>
                    <li>All Products</li>
                  </NavLink>
                  <div className={sass.border}></div>
                  <NavLink  className={`${theme} ${ sass.a}`}  to={'/categories'}>
                    <li>Categories</li>
                  </NavLink>
                  <div className={sass.border}></div>
                  {/* <NavLink to={'/comments'}>
                    <li>Message</li>
                  </NavLink> */}
                  {/* <div className={sass.border}></div> */}
                  <NavLink  className={`${theme} ${ sass.a}`}  to={'/contact'}>
                    <li>Contact</li>
                  </NavLink>

                   <App/>
              </ul>
            </div>

            <div ref={bar} className={`${theme} ${ sass.menu2}`}>
              <ul className={`${theme} ${ sass.ul}`}  ref={bar}>
                  <NavLink className={`${theme} ${ sass.a}`} to={'/'}>
                    <li>Home</li>
                  </NavLink>
                  <div className={sass.border}></div>
                  <NavLink className={`${theme} ${ sass.a}`}  to={'/about'}>
                    <li>About</li>
                  </NavLink>
                  <div className={sass.border}></div>
                  <NavLink className={`${theme} ${ sass.a}`}  to={'/products'}>
                    <li>All Products</li>
                  </NavLink>
                  <div className={sass.border}></div>
                  <NavLink className={`${theme} ${ sass.a}`}  to={'/categories'}>
                    <li>Categories</li>
                  </NavLink>
                  <div className={sass.border}></div>
                  <NavLink className={`${theme} ${ sass.a}`}  to={'/contact'}>
                    <li>Contact</li>
                  </NavLink>
                  <App/>
              </ul>
              <div className={`${theme} ${ sass.xmark}`}  onClick={toggle}>
              <i className={`${theme} ${ sass.i}`}  class="fa-solid fa-xmark"></i>
              </div>

              {/* <App/> */}
            </div>

            <div ref={smooth} onClick={toggle} className={sass.smooth}></div>

            <div onClick={toggle} className={sass.bar}>
               <img src={menu} alt="" />
            </div>
         </header>
    </div>
  )
}

export default Header