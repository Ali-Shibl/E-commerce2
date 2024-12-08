import React, { useContext } from 'react'
import { Auth } from '../../Context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function AuthProductRoute({children}) {


let {userLogin}=useContext(Auth)

  return  userLogin ? <Navigate to={'/home'}/> : children 
}
