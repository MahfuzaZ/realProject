import React, { useEffect, useState } from 'react'
import sass from './categories.module.scss'
import {useData} from '../../utils/Hooks'
import { Link } from 'react-router-dom'
import { instance } from '../../utils/Instance'
import { useMode } from '../../utils/Zustand'
function Categories({cart, setcart}) {
   const [categ, setcateg] = useState('')
    const query = useData(['categ'], '/category')
    const theme = useMode((state) => state.mode);
   const query2 = useData(['categ2'], '/products')
   const [search, setSearch] = useState('')
   const [filter, setFilter] = useState([])

   useEffect(() => {
      instance.get(categ == ''  ? 'products' : `/products/category/${categ}`).then(res => {
         setFilter(res?.data.data)
      })
   }, [categ])
   
   useEffect(() =>{
      setFilter(query2?.data?.data?.data.filter(e => e.name_Uz?.toLowerCase().includes(search.toLowerCase())))
   }, [search, query2?.data?.data])

   console.log(filter);

  return (
    <div className={`${theme} ${ sass.categories}`}>
         <div className={`${theme} ${ sass.top}`}>
            <form action=""> 
               <div className={`${theme} ${ sass.search}`}>
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input className={`${theme} ${ sass.input}`}  onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search'/>
               </div>
              </form>
         </div>

         <div className={`${theme} ${ sass.categ}`}>
            <ul>
               <li className={`${theme} ${ sass.li}`} onClick={() => setcateg('')}>All</li>
               {query?.data?.data.data.map(e => (<li className={`${theme} ${ sass.li}`} order={e.id} onClick={(e) => setcateg(e.target.getAttribute('order'))}  key={e.id}>{e.name_Uz}</li>))}
            </ul>
         </div>

         <div className={sass.main}>
            <div className={sass.right}>
                <ul>
                   {filter?.map(e => 
                      (<Link to={`/categories/${e.id}`}><li className={`${theme} ${ sass.li}`} key={e.id}><img src={`http://3.19.30.204/upload/${e?.photo?.path}`} alt="" /><h3 className={`${theme} ${ sass.h3}`}>{e.name_Uz}</h3><p className={`${theme} ${ sass.p}`}>{e.price}</p></li></Link>)
                   )}
                </ul>
            </div>
         </div>
    </div>
  )
}

export default Categories