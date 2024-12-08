import React   from 'react'
import img from '../../assets/images/phone.jfif'
import './Home.css'
import NewArrival from '../../Components/NewArrival/NewArrival'
import CustomerService from '../../Components/CustomerService/CustomerService'
import SliderFlashSales from '../../Components/SliderFlashSales/SliderFlashSales'
import Categories from '../../Components/Categories/Categories'
import Music from '../../assets/images/Music.png'
import Products from '../../Components/Products/Products'
import {Helmet} from "react-helmet";


export default function Home() {




  return (
    <>

<Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <meta name="description" content="HomePage" />
      </Helmet>
    <main>

      <header className=' row g-1 g-md-3 mb-5 flex-column-reverse flex-lg-row'>
        <div className="col-lg-3 col-xl-2 pt-lg-5 pt-3 menuHome">
          <p className='collapsed mb-2 mb-lg-3 curser d-flex align-items-center justify-content-between' data-bs-toggle="collapse" href="#Woman’s" role="button" aria-expanded="false" aria-controls="Woman’s"><span>Woman’s Fashion</span><i className="fa-solid fa-angle-right"></i></p>

          <ul className='list-unstyled ps-4 my-2 my-lg-3 collapse' id="Woman’s">
            <li className='mb-2 text-muted'>Athleisure</li>
            <li className='mb-2 text-muted'>Casual</li>
            <li className='mb-2 text-muted'>Formal</li>
            <li className=' text-muted'>Evening Wear</li>
          </ul>
          <p className='collapsed mb-2 mb-lg-3 curser d-flex align-items-center justify-content-between' data-bs-toggle="collapse" href="#Men’s" role="button" aria-expanded="false" aria-controls="Men’s"><span>Men’s Fashion</span><i className=" fa-solid fa-angle-right"></i></p>
          <ul className='list-unstyled ps-4 my-2 my-lg-3 collapse' id="Men’s">
            <li className='mb-2 text-muted'>Workwear</li>
            <li className=' text-muted'>Classic</li>
          </ul>

          <p className=' curser m-0'>Electronics</p>
          <p className=' curser my-2 my-lg-3 '>Home & Lifestyle</p>
          <p className=' curser m-0'>Medicine</p>
          <p className=' curser my-2 my-lg-3 '>Sports & Outdoor</p>
          <p className=' curser m-0'>Baby’s & Toys</p>
          <p className=' curser my-2 my-lg-3 '>Groceries & Pets</p>
          <p className=' curser m-0'>Health & Beauty</p>

        </div>
        <div className="col-lg-9 col-xl-10 pt-lg-5 pt-3">
          <div className='bg-black w-header ms-auto'>

             <div className="row align-items-center">
             <div className='col-6 col-md-4 col-xl-6'>
              <div className='text-white ms-2 ms-md-4 ms-xl-5'>

                <div className='d-flex align-items-center mb-2 mb-md-3 mb-xl-4'>
                <i className="fa-brands fa-apple apply-icon me-2  me-md-4"></i>
                  <span>iPhone 14 Series</span>
                </div>
              <h1 className='text-Voucher mb-1 mb-md-3 mb-xl-4'>Up to 10% <br/> off Voucher</h1>

              <a className=' text-white text-decoration-none pb-1  shop-Link'>Shop Now</a>

              </div>
              

             </div>
             <div className='col-6 col-md-8  col-xl-6'>
              <img src={img} alt="imgphone"  className='w-100 pt-3'/>
             </div>
             </div>
          </div>

        </div>

      </header>

      <div className='FlashSales'>
      <SliderFlashSales/>
      </div>
      <Categories/>

      <div className='row bg-black my-5 p-4 p-md-5 align-items-center '>
        <div className="col-md-7 col-lg-6 text-white">
          <span className='mb-0 text-green'>Categories</span>
          <h2 className='h1 my-4'>Enhance Your Music Experience</h2>
          <div className='d-flex align-items-center gap-2 mb-4 mb-md-5'>
            <div className='bg-white text-black d-flex flex-column justify-content-center align-items-center rounded-circle' style={{height:65, width:65}}>
              <span className='my-0 fw-semibold'>23</span>
              <span className='my-0 times'>Hours</span>
            </div>
            <div className='bg-white text-black d-flex flex-column justify-content-center align-items-center rounded-circle' style={{height:65, width:65}}>
              <span className='my-0 fw-semibold'>05</span>
              <span className='my-0 times'>Days</span>
            </div>
            <div className='bg-white text-black d-flex flex-column justify-content-center align-items-center rounded-circle' style={{height:65, width:65}}>
              <span className='my-0 fw-semibold'>59</span>
              <span className='my-0 times'>Minutes</span>
            </div>
            <div className='bg-white text-black d-flex flex-column justify-content-center align-items-center rounded-circle' style={{height:65, width:65}}>
              <span className='my-0 fw-semibold'>35</span>
              <span className='my-0 times'>Seconds</span>
            </div>
            
          </div>
          <button className='btn btn-green'>Buy Now!</button>
        </div>
        <div className="col-md-5 col-lg-4 ">
          <img src={Music} alt="Music" className='Music ' />
        </div>
      </div>


     
     <Products/>
      
      <NewArrival/>
      <div className='mb-5'>
        <CustomerService/>
      </div>

     


    </main>
  </>)
}
