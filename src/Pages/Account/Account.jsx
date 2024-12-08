import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import {Helmet} from "react-helmet";

export default function Account() {




  return (

    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>account</title>
        <meta name="description" content="AccountPage" />
      </Helmet>

      <div className='py-5'>
        <div className="container">
          <div className='d-flex justify-content-between align-items-center'>
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/home" className='nav-link'>Home</Link></li>
                <li className="breadcrumb-item"><a href='#' className='nav-link ms-3'>My Account</a></li>
              </ol>
            </nav>
            <p className='mb-0'>Welcome <span className='text-orange'>Agent </span></p>

          </div>
          <div className="row g-3 my-5">
            <div className="col-lg-4 col-xl-3">

              <h1 className='h6 collapsed curser' data-bs-toggle="collapse" href="#MyAccount" role="button" aria-expanded="false" aria-controls="MyAccount">Manage My Account <i className="ms-2 fa-solid fa-angle-right"></i></h1>

              <ul className='list-unstyled ps-4 my-3 collapse' id="MyAccount">
                <li className='mt-2 text-muted'><NavLink className={'nav-link nav-tab'} to={'profile'}>My Profile</NavLink></li>
                <li className='mt-2 text-muted'><NavLink className={'nav-link nav-tab'} to={'editprofile'}>Edit Data </NavLink></li>
                <li className='mt-2 text-muted'>Address Book</li>
                <li className='mt-2 text-muted'>My Payment Options</li>
              </ul>
              <h1 className='h6 collapsed curser' data-bs-toggle="collapse" href="#Order" role="button" aria-expanded="false" aria-controls="Order">My Orders <i className="ms-2 fa-solid fa-angle-right"></i></h1>
              <ul className='list-unstyled ps-4 my-3 collapse' id="Order">
                <li className='mt-2 text-muted'>My Returns</li>
                <li className='mt-2 text-muted'>My Cancellations</li>
              </ul>

              <h1 className='h6 curser'>My WishList</h1>

            </div>

            <div className="col-lg-8 col-xl-9">

              <Outlet></Outlet>




            </div>

          </div>




        </div>
      </div>

    </>
  )
}
