import React from 'react'
import sass from './products.module.scss'
import { useData } from '../../utils/Hooks'
import { Link } from 'react-router-dom'
import books from '../Img/books.jpeg'
import { useMode } from '../../utils/Zustand'
function Products() {
  const query2 = useData(['categ2'], '/products')
  const theme = useMode((state) => state.mode);
  return (
    <div className={`${theme} ${ sass.products}`}>
       <div className={sass.main}>
       <h1>All Products</h1>
       <ul>
         {query2?.data?.data.data.map(e => 
          (<Link className={`${theme} ${ sass.a}`} to={`/categories/${e.id}`}><img src={`http://3.19.30.204/upload/${e?.photo?.path}`} alt="" /><h3  className={`${theme} ${ sass.h3}`}>{e.name_Uz}</h3><h5  className={`${theme} ${ sass.h5}`}>{e.price}</h5><p  className={`${theme} ${ sass.p}`}>{e.description_Uz}</p></Link>))}
       </ul>
       </div>

    </div>
  )
}

export default Products