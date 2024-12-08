import React, { useContext } from 'react'
import style from './Login.module.css'
import img from '../../assets/images/imgRegister.webp'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup';
import { Auth } from '../../Context/AuthContext'
import {Helmet} from "react-helmet";

export default function Login() {


let {userLogin, setuserLogin}=useContext(Auth)
  const navigate=useNavigate()

  const validationSchema = yup.object({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Minimum 6 characters'),
  });


  const {handleSubmit,handleBlur,handleChange,values,errors,touched,isValid} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async () => {
      try {
        let { data }=await axios.post('https://api.escuelajs.co/api/v1/auth/login',values)
        
     if (data.access_token) {
     
      localStorage.setItem('tokenUser',JSON.stringify(data.access_token))
      localStorage.setItem('tokenUserRefresh',JSON.stringify(data.refresh_token))
      setuserLogin(true)
      navigate('/home')
      
     }
        
        console.log(data.access_token);
        
      } catch (error) {
        console.log(error.response.data.message);
    
      }
       
    },
    validationSchema,
  });




  return (
   <>

<Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <meta name="description" content="LoginPage" />
      </Helmet>
   <div className="row g-2 py-5 justify-content-center align-items-center my-lg-5 my-4">

   <div className={`position-relative  col-lg-7 d-none d-lg-block ${style.imgLogin} p-0`}>
    <img src={img} alt="imgregister" className='w-100' />
    </div>


    <div className="col-lg-4 col-md-8 offset-lg-1">
      <h1 className='mb-3 h2'>Log in to Exclusive</h1>
      <p className='mb-4'>Enter your details below</p>

    <form  onSubmit={handleSubmit}>

    <input value={values.email} name='email' onChange={handleChange} onBlur={handleBlur}  type="text" placeholder='Email or Phone Number' className='w-100 mb-2 border-0 border-bottom border-1 border-black py-2'/>
    {errors.email&&touched.email&&<div className='text-danger'>{errors.email}</div>}

      <input value={values.password} name='password' onChange={handleChange} onBlur={handleBlur}  type="password" placeholder='Password' className='w-100 mb-2 border-0 border-bottom border-1 border-black py-2'/>
      {errors.password&&touched.password&&<div className='text-danger'>{errors.password}</div>}

      <div className='d-flex justify-content-between align-items-center mt-3'>
        <button disabled={!isValid} className={`${style.btnOrange} btn py-2 px-4 `}>Login </button>
        <p className='mb-0 text-orange curser'>Forget Password?</p>
      </div>


    </form>


       
    </div>
  
   </div>
   
   
   
   </>
  )
}
