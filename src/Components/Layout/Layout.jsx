import React, { Fragment, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import BtnUp from '../BtnUp/BtnUp'
import { Toaster } from 'react-hot-toast';
export default function Layout() {
  const [showBtnUp, setshowBtnUp] = useState(false)

  document.addEventListener('scroll', () => {
    document.documentElement.scrollTop > 250 ? setshowBtnUp(true) : setshowBtnUp(false)
  })



  return (
    <Fragment>



      <Navbar />

      <div className="container">

        <Outlet></Outlet>
        <Toaster position="bottom-right"
          reverseOrder={false}
          gutter={8} />

      </div>

      <Footer />
      {showBtnUp &&
        <BtnUp />}


    </Fragment>
  )
}
