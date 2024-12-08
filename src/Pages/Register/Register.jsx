import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import * as yup from 'yup';
import style from '../Login/Login.module.css'
import img from '../../assets/images/imgRegister.webp'
import { Link, useNavigate } from 'react-router-dom';
import useCloudinry from '../../Hook/useCloudinry';
import {Helmet} from "react-helmet";

export default function Register() {

let navigate=useNavigate()
  let {uploadFile ,imageUrl ,isLoading}  = useCloudinry();

  const validationSchema = yup.object({
    name: yup.string().required('Name is required').min(3, 'Minimum 3 characters').max(10, 'Maximum 10 characters'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Minimum 6 characters'),
    avatar: yup.string().required('Image upload is required'),
  });


  const {handleSubmit,handleBlur,handleChange,values,errors,touched,isValid,setFieldValue} = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      avatar: '',
    },
    onSubmit: async () => {
      try {
        let { data }=await axios.post('https://api.escuelajs.co/api/v1/users/',values)
        
        if (data) {
          navigate('/login')
          
        }
        
        console.log(data);
        
      } catch (error) {
        console.log(error.response.data.message[0]);
    
      }
       
    },
    validationSchema,
  });


  
  useEffect(() => {
    if (imageUrl) {
      setFieldValue('avatar', imageUrl); // Update Formik's avatar value
    }
  }, [imageUrl, setFieldValue]);


  return (
    <>

<Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
        <meta name="description" content="RegisterPage" />
      </Helmet>

      <div className="row g-2 py-5 justify-content-center align-items-center my-lg-5 my-4">

<div className={`position-relative  col-lg-7 d-none d-lg-block ${style.imgLogin} p-0`}>
 <img src={img} alt="imgregister" className='w-100' />
 </div>


 <div className="col-lg-4 col-md-8 offset-lg-1">
   <h1 className='mb-2 h2'>Create an account</h1>
   <p className='mb-2'>Enter your details below</p>

<form onSubmit={handleSubmit}>


   <input value={values.name} onChange={handleChange} onBlur={handleBlur} name='name' type="text" placeholder='Name' className='w-100 mb-2 border-0 border-bottom border-1 border-black py-2'/>
   {errors.name&&touched.name&&<div className='text-danger'>{errors.name}</div>}
   <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="text" name='email' placeholder='Email or Phone Number' className='w-100 mb-2 border-0 border-bottom border-1 border-black py-2'/>
   {errors.email&&touched.email&&<div className='text-danger'>{errors.email}</div>}

   <input value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" name='password' placeholder='Password' className='w-100 mb-2 border-0 border-bottom border-1 border-black py-2'/>
   {errors.password&&touched.password&&<div className='text-danger'>{errors.password}</div>}

{/* img */}
   {isLoading ? '...loading' : (imageUrl && <img src={imageUrl} style={{ width: 100 }} alt="Uploaded avatar" />)}
   <input accept="image/*" onChange={uploadFile}  type="file" name='avatar' placeholder='avatar' className='w-100 mb-3 border-0 border-bottom border-1 border-black py-2'/>
   {imageUrl&&<div className='text-danger'>{errors.avatar}</div>}
  
     <button className={`${style.btnOrange} btn py-2 w-100 `} disabled={!isValid}>Create Account</button>
     <button className='btn py-2 w-100  btn-outline-dark mt-2'><i className="fa-brands fa-google me-2 googleIcon"></i> Sign up with Google </button>
 

     <div className='d-flex justify-content-center gap-4 align-items-center mt-3'>
        <p className='mb-0'> Already have account? </p>
        <Link className='mb-0 text-black' to={'/login'}>Login</Link>
      </div>

      </form>
    
 </div>

</div>
   
    </>
  );
}
