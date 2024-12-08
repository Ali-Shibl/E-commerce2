import React, { useContext } from 'react'
import { Auth } from '../../Context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function ProductRoute({children}) {


let {userLogin}=useContext(Auth)

  return  userLogin ? children : <Navigate to={'/login'}/>
}
