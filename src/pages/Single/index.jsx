import React from 'react'
import sass from './single.module.scss'
import { useData } from '../../utils/Hooks'
import { Link, useParams } from 'react-router-dom'
import books from '../Img/books.jpeg'
import { useMode } from '../../utils/Zustand'
function Single() {
  const theme = useMode((state) => state.mode);
  const {id} = useParams()
   const single = useData(['single'], `/products/${id}`)
   console.log(single);
  return (
    <div className={`${theme} ${ sass.single}`}>
          <ul>
          <Link className={`${theme} ${ sass.a}`} to={'/'}>Home</Link> /
          <Link className={`${theme} ${ sass.a}`} to={-1}>Categories</Link>
          </ul>
         <div className={sass.main}>
           <img src={`http://3.19.30.204/upload/${single?.photo?.path}`} alt="" />
            <div className={sass.left}>
              <h1>Product Name: {single?.data?.data.name_Uz}</h1>
              <h2 className={`${theme} ${ sass.h2}`}>Size: {single?.data?.data.size}</h2>
              <h4 className={`${theme} ${ sass.h4}`}>Type: {single?.data?.data.type}</h4>
              <h3 className={`${theme} ${ sass.h3}`}>Price: {single?.data?.data.price}</h3>
            </div>
         </div>
    </div>
  )
}

export default Single