import React from 'react'
import style from './Footer.module.css'
import img from '../../assets//images/code.webp'
import img1 from '../../assets/images/1.webp'
import img2 from '../../assets/images/2.webp'
export default function Footer() {
  return (
    <>
      <footer className={`bg-black py-5 ${style.footer}`}>
        <div className="container">

          <div className="row g-3 text-center text-sm-start">

            <div className="col-xl-3 col-lg-4 col-sm-6 ">
              <h4 className='mb-4'>Exclusive</h4>
              <p className='mb-3'>Subscribe</p>
              <p className='mb-3'>Get 10% off your first order</p>
              <div  className={`${style.formInput} position-relative m-auto m-sm-0`}>
              <input type="text" className={`${style.inputFooter} py-2 ps-3 pe-4 w-100`} placeholder='Enter your email' />
                <span className={`${style.arrow} position-absolute top-50 translate-middle-y  `}><i className="fa-solid fa-reply-all fa-rotate-180"></i></span>
              </div>

            </div>
            <div className="col-xl-2 col-lg-4 col-sm-6 ">
              <h5 className='mb-4'>Support</h5>
              <p className='mb-3'>111 Bijoy sarani,Dhaka,<br/>  DH 1515, Bangladesh.</p>
              <p className='mb-3'>exclusive@gmail.com.</p>
              <p>+88015-88888-9999</p>

            </div>
            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className='mb-4'>Account</h5>
              <p className='mb-3'>My Account</p>
              <p className='mb-3'>Login / Register</p>
              <p className='mb-3'>Cart</p>
              <p className='mb-3'>Wishlist</p>
              <p>Shop</p>

            </div>
            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className='mb-4'>Quick Link</h5>
              <p className='mb-3'>Privacy Policy</p>
              <p className='mb-3'>Terms Of Use</p>
              <p className='mb-3'>FAQ</p>
              <p>Contact</p>

            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <h5 className='mb-4'>Download App</h5>
              <p className={`mb-3 ${style.pragraph}`}>Save $3 with App New User Only</p>



              <div className='d-flex justify-content-center flex-column flex-sm-row justify-content-md-start align-items-center gap-3 mb-3 mb-md-4'>
                <div>
                  <img src={img} alt="img" className={style.img}/>
                  
                </div>
                <div >
                  <img src={img1} alt="img1" className={style.img1} />
                  <img src={img2} alt="img1" className={style.img1}/>

                </div>

              </div>



              <div className='social d-flex justify-content-md-start  justify-content-center gap-md-5 gap-4 align-items-center '>
                <div>
                <i className="fa-brands fa-facebook-f fa-xl"></i>
                </div>
                <div>
                <i className="fa-brands fa-twitter fa-xl"></i>
                </div>
                <div>
                <i className="fa-brands fa-instagram fa-xl"></i>
                </div>
                <div>
                <i className="fa-brands fa-linkedin-in fa-xl"></i>
                </div>

              </div>
              

            </div>

          </div>

          <div className='mt-5'>
          <p className='mb-0 text-center text-white text-opacity-25'> &copy; Copyright Rimel 2022. All right reserved</p>
          </div>

        </div>
      </footer>
    </>
  )
}
