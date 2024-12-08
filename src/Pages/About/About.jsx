import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/images/bgabout.webp'
import img3 from '../../assets/images/person1.webp'
import img2 from '../../assets/images/person2.webp'
import img1 from '../../assets/images/person3.webp'
import Slider from "react-slick";
import './About.css'
import CustomerService from '../../Components/CustomerService/CustomerService'
import {Helmet} from "react-helmet";


export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,

        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <meta name="description" content="aboutPage" />
      </Helmet>

      <div className='py-5'>
        <div className="container">
          <nav aria-label="breadcrumb ">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><Link to="/home" className='nav-link'>Home</Link></li>
              <li className="breadcrumb-item"><a href='#' className='nav-link ms-3'>About</a></li>
            </ol>
          </nav>

          <div className='row py-4 py-lg-5 align-items-center g-3 '>
            <div className='col-md-6 col-xl-5'>
              <h1 className='mb-4 fw-bold'>Our Story</h1>
              <p className='p'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
              <p className='p'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>

            </div>
            <div className='col-md-6 col-xl-6 offset-xl-1'>
              <div>
                <img src={img} alt="imageAbout" className='w-100 imgAbout' />


              </div>

            </div>

          </div>

          <div className='row py-4 py-lg-5 align-items-center g-4'>

            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className='border border-1 border-black border-opacity-50 rounded-2 text-center p-2 p-lg-3 itemIcon'>

                <div className='icon-about rounded-circle my-3 d-flex align-items-center justify-content-center m-auto'>
                  <i class="fa-solid fa-shop fa-2xl"></i>

                </div>
                <p className='h3 fw-bold my-2'>10.5k </p>
                <p className='mb-2'>Sallerrs active in our site</p>
              </div>

            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className=' border border-1 border-black border-opacity-50 rounded-2 text-center p-2 p-lg-3 itemIcon'>
                <div className='icon-about rounded-circle my-3 d-flex align-items-center justify-content-center m-auto'>

                  <i class="fa-solid fa-dollar-sign fa-2xl"></i>

                </div>
                <p className='h3 fw-bold my-2'>33k </p>
                <p className='mb-2'>Mopnthly Produduct Sale</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className='border border-1 border-black border-opacity-50 rounded-2 text-center p-2 p-lg-3 itemIcon'>
                <div className='icon-about rounded-circle my-3 d-flex align-items-center justify-content-center m-auto'>
                  <i class="fa-solid fa-vest fa-2xl"></i>

                </div>
                <p className='h3 fw-bold my-2'>45.5k </p>
                <p className='mb-2'>Customer active in our site</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className='border border-1 border-black border-opacity-50 rounded-2 text-center p-2 p-lg-3 itemIcon'>

                <div className='icon-about rounded-circle my-3 d-flex align-items-center justify-content-center m-auto'>

                  <i class="fa-solid fa-sack-dollar fa-2xl"></i>

                </div>
                <p className='h3 fw-bold my-2'>25k </p>
                <p className='mb-2'>Anual gross sale in our site</p>
              </div>
            </div>

          </div>



          <div className='py-5 slider'>



            <Slider {...settings} arrows={false}>
              <div className=' m-auto '>
                <div className='person-item bg-light pt-5 '>
                  <img src={img1} alt="person1" className='m-auto d-block ' />
                </div>
                <h2 className='h4 my-2'>Tom Cruise</h2>
                <p className='mb-3'>Founder & Chairman</p>
                <div className="socialPerson d-flex align-items-center gap-3 ">
                  <i class="fa-brands fa-twitter fa-lg"></i>
                  <i class="fa-brands fa-instagram fa-lg"></i>
                  <i class="fa-brands fa-linkedin-in fa-lg"></i>

                </div>
              </div>

              <div className=' m-auto '>
                <div className='person-item bg-light pt-5'>
                  <img src={img2} alt="person1" className='m-auto d-block' />
                </div>
                <h2 className='h4 my-2'>Emma Watson</h2>
                <p className='mb-3'>Managing Director</p>
                <div className="socialPerson d-flex align-items-center gap-3 ">
                  <i class="fa-brands fa-twitter fa-lg"></i>
                  <i class="fa-brands fa-instagram fa-lg"></i>
                  <i class="fa-brands fa-linkedin-in fa-lg"></i>

                </div>
              </div>

              <div className=' m-auto '>
                <div className='person-item bg-light pt-5'>
                  <img src={img3} alt="person1" className='m-auto d-block' />
                </div>
                <h2 className='h4 my-2'>Will Smith</h2>
                <p className='mb-3'>Product Designer</p>
                <div className="socialPerson d-flex align-items-center gap-3 ">
                  <i class="fa-brands fa-twitter fa-lg"></i>
                  <i class="fa-brands fa-instagram fa-lg"></i>
                  <i class="fa-brands fa-linkedin-in fa-lg"></i>

                </div>
              </div>



            </Slider>
          </div>






          <CustomerService />


        </div>
      </div>




    </>
  )
}
