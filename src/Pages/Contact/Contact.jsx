import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'
import {Helmet} from "react-helmet";

export default function Contact() {

  return (
    <>
          <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <meta name="description" content="ContactPage" />
      </Helmet>
   
    <div className="py-5">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/contact" className="nav-link ms-3">Contact</Link>
            </li>
          </ol>
        </nav>

        <div className="row g-4 my-4">
          {/* Contact Info */}
          <div className="col-md-6 col-xl-4">
            <div className="shadow p-4">
              <div className='d-flex align-items-center gap-3 mb-3'>
               <div className='IconContact rounded-circle text-white d-flex justify-content-center align-items-center'>
                <i class="fa-solid fa-phone"></i>
               </div>
               <h5 className='mb-0'>Call Us</h5>
              </div>
              <p className='mb-0'>We are available 24/7, 7 days a week.</p>
              <p className='mt-3 mb-4'>Phone: +8801611112222</p>
              <hr />
              <div className='d-flex align-items-center gap-3 mb-3'>
               <div className='IconContact rounded-circle text-white  d-flex justify-content-center align-items-center'>
                <i class="fa-regular fa-envelope"></i>
               </div>
               <h5 className='mb-0'> Write to Us</h5>
              </div>
             
              <p className='m-0'>Fill out our form and we will contact you within 24 hours.</p>
              <p className='my-3'>Email: customer@exclusive.com</p>
              <p className='m-0'>Emails: support@exclusive.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6 col-xl-8">
            <form className="shadow p-3 p-lg-4">
              <div className="row">
                <div className="col-lg-6 col-xl-4">
                  <input
                    type="text"
                    className="form-control my-2 py-2 px-3 bg-light"
                    placeholder="Your Name"
                    name="name"
                    id="name"
                    aria-label="Name"
                  />
                </div>

                <div className="col-lg-6 col-xl-4">
                  <input
                    type="tel"
                    className="form-control my-2 py-2 px-3 bg-light"
                    placeholder="Your Phone"
                    name="phone"
                    id="phone"
                    aria-label="Phone"
                  />
                </div>

                <div className="col-xl-4">
                  <input
                    type="email"
                    className="form-control my-2 py-2 px-3 bg-light"
                    placeholder="Your Email"
                    name="email"
                    id="email"
                    aria-label="Email"
                  />
                </div>

                <div className="col-md-12 mt-3">
                  <textarea
                    className="form-control my-2 py-2 px-3 bg-light"
                    style={{ height: 200 }}
                    placeholder="Your Message"
                    name="message"
                    id="message"
                    aria-label="Message"
                  ></textarea>
                </div>
              </div>

              <div className="text-end mt-3">
                <button type="submit" className="btn btn-danger">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   </>);
}
