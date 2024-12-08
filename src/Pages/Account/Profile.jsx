import axios from 'axios'
import React, { useLayoutEffect, useState } from 'react'
import Loading from '../../Components/Loading/Loading'
import {Helmet} from "react-helmet";

export default function Profile() {

  const [DataUser, setDataUser] = useState({})
  const [isLoading, setisLoading] = useState(true)
  let { avatar, name, email } = DataUser
  const token = JSON.parse(localStorage.getItem('tokenUser'))



  async function getData() {
    try {
      const { data } = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setDataUser(data);
      console.log(data);
    } catch (error) {

      console.log(error);

    } finally {
      setisLoading(false)
    }
  }

  useLayoutEffect(() => {

    getData()

  }, [])


  return (
   <>
   
   <Helmet>
        <meta charSet="utf-8" />
        <title>Profile</title>
        <meta name="description" content="ProfilePage" />
      </Helmet>

   {
      isLoading ? <Loading/> :


      <div className='row'>

         <div className="col-sm-4 col-xl-3">
          <img src={avatar} alt="imageUser" className='w-100' />
         </div>
         <div className="col-sm-8 col-xl-9">
          <p className='my-2 mt-md-0'><span className='text-orange '>Name : </span>{name}</p>
          <p><span className='text-orange'>Email : </span>{email}</p>
         </div>
      </div>
    }
   </>
  )
}
