import React from 'react'
import style from './BtnUp.module.css'

export default function BtnUp() {


function RiseUp() {
    document.documentElement.scrollTop=0
}



  return (
    <div onClick={RiseUp} className={`${style.btnup} position-fixed curser d-flex justify-content-center align-items-center rounded-circle `}>
        <i className="fa-solid fa-arrow-up"></i>

    </div>
  )
}
