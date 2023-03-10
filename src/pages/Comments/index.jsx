import React from 'react'
import { useData } from '../../utils/Hooks'
import sass from './message.module.scss'

function Comments() {
    const mes = useData(['message'], '/message')
    console.log(mes);
  return (
    <div className={sass.message}>
        <h1>Messages</h1>
       <ul>
           {mes?.data?.data.data.map(e => <li><h3>{e.phone}</h3><h4>{e.subject}</h4><h5>{e.message}</h5></li>)}
       </ul>
    </div>
  )
}

export default Comments