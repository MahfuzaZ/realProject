import React from 'react'
import { Link } from 'react-router-dom'
import sass from './button.module.scss'
function Buttons({type, text, border, href, onClick}) {
  const btn =  <button onClick={onClick} className={`'button ${type === 'green' ? sass.green : sass.white} ${border && sass.border}`}>{text}</button>
  if (href) {
    return  <Link to={href}>{btn}</Link>
  }
  return btn
}

export default Buttons