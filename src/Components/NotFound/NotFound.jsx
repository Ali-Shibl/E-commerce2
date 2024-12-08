import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
import {Helmet} from "react-helmet";


export default function NotFound() {
  return (
   <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Notfound</title>
        <meta name="description" content="NotfoundPage" />
      </Helmet>

      <main className='mt-3'>

        <nav aria-label="breadcrumb ">

          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/home" className='nav-link'>Home</Link></li>
            <li className="breadcrumb-item"><a href='#' className='nav-link ms-3'>404 Erorr</a></li>
          </ol>
        </nav>

        <div className='notfound d-flex  align-items-center justify-content-center'>


          <div className="text-center ">
            <h1 className="display-1 mb-md-4 mb-2">404 Not Found</h1>
            <p className="text-muted mb-md-5 mb-4">
              Your visited page not found. You may go home page.
            </p>
            <Link to="/home" className="btn btn-danger px-lg-5 py-lg-3  px-4 py-2">
              Back to home page
            </Link>
          </div>

        </div>
      </main>

</>
    
  )
}
