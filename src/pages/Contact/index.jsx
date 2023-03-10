import React from 'react'
import { useData } from '../../utils/Hooks'
import sass from './contact.module.scss'
import phone from '../Img/phone.svg'
import email from '../Img/email.svg'
import { useForm } from "react-hook-form";
import {  Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { instance } from '../../utils/Instance'
import { useMode } from '../../utils/Zustand'
function Contact() {
 const theme = useMode((state) => state.mode);
  const contact = useData(['contact'], '/information')
  const mute = useMutation((data) => instance.post('message', data))
  console.log(contact);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => mute.mutate({...data, status: 'PENDING'});
  const parse = require('html-react-parser');
  return (
    <div className={`${theme} ${sass.contact}`}>
        <div className={`${theme} ${sass.main}`}>
            <div className={sass.left}>
               <div className={`${theme} ${sass.top}`}>
               <h1 className={`${theme} ${sass.h1}`}>Contact us</h1>
               <p className={`${theme} ${sass.p}`}>Send for us your request and we will get in touch with you as soon as possible</p>
               </div>
               <div className={sass.bottom}>
                   <div className={sass.phone}>
                      <img src={phone} alt="" />
                      <Link to={'tel:contact?.data?.data?.data[0].phone}'}>{contact?.data?.data?.data[0].phone}</Link>
                   </div>
                   <div className={sass.mes}>
                     <img src={email} alt="" />
                     <Link to={'email:contact?.data?.data?.data[0].email'}>{contact?.data?.data?.data[0].email}</Link>
                   </div>
                   <div className={`${theme} ${sass.location}`}>
                      <div className={sass.icon}>
                      <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <h3>{contact?.data?.data?.data[0].address}</h3>
                   </div>
                   <div className={sass.location}>
                      <div className={sass.icon}>
                      <i class="fa-brands fa-instagram"></i>
                      </div>
                     <Link to={contact?.data?.data?.data[0].instagram}>{contact?.data?.data?.data[0].instagram}</Link>
                   </div>
               </div>
            </div>
            <div className={`${theme} ${sass.right}`}>
             <form className={`${theme} ${sass.form}`} onSubmit={handleSubmit(onSubmit)}>
                   <h4>Phone</h4>
                   <input   placeholder='Phone' {...register("phone", { required: true, maxLength: 20 })} />
                   <h4>E-mail</h4>
                   <input  placeholder='Your Email' {...register("subject", { pattern: /^[A-Za-z]+$/i })} />
                   <h4>Message</h4>
                   <input   placeholder='Message' type="textarea" {...register("message", { min: 40, max: 100 })} />
                  <div className={sass.btn}>
                     <input className={sass.submit} type="submit" />
                     <p>By sending request you agree to out Pivacy&Policy</p>
                  </div>
              </form>
            </div>
        </div>

        <div className={sass.map}>
          <h1 className={`${theme} ${sass.h1}`}>Location</h1>
           {contact.isFetched && parse(contact?.data?.data.data[0].addressMap)}
           
        </div>
    </div>
  )
}

export default Contact