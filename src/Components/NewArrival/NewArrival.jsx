import React from 'react'
import img1 from '../../assets/images/Arrival1.webp'
import img2 from '../../assets/images/Arrival2.webp'
import img3 from '../../assets/images/Arrival3.webp'
import img4 from '../../assets/images/Arrival4.webp'
import './NewArrival.css'
export default function NewArrival() {
    return (
        <>
            <p className='Featured position-relative  mt-5 mb-4 text-orange'>Featured</p>

            <h2 className='mb-5 h1'>New Arrival</h2>

            <div className="row arrival g-4 pb-3 ">
  <div className="col-md-12 col-lg-6 position-relative">
    <div className="bg-black item1 item w-100">
      <img src={img1} alt="img1" className="w-100 h-100" />
    </div>
    <div className="content position-absolute  text-white" >
        <h3 className='mb-0 h4'>PlayStation 5</h3>
        <p className='my-2'>Black and White version of the PS5 coming out on sale.</p>
        <a className=' text-white text-decoration-none pb-1  shop-Link'>Shop Now</a>

    </div>
  </div>

  <div className="col-md-12 col-lg-6">
    <div className="row g-4 h-100">
      <div className="col-md-6 col-lg-12  position-relative">

        <div className="bg-black item2 item w-100 ">
          <img src={img4} alt="img4" className="w-100 h-100" />
        </div>

        <div className="content position-absolute  text-white" >
        <h3 className='mb-0 h4'>Women’s Collections</h3>
        <p className='my-2'>Featured woman collections that give you another vibe.</p>
        <a className=' text-white text-decoration-none pb-1  shop-Link'>Shop Now</a>
        </div>
     
      </div>
      <div className="col-md-6 col-lg-6  position-relative">
        <div className="bg-black item3 item w-100">
          <img src={img2} alt="img2" className="w-100 h-100" />
        </div>
        <div className="content position-absolute  text-white" >
        <h3 className='mb-0 h4'>Speakers</h3>
        <p className='my-2'>Amazon wireless speakers</p>
        <a className=' text-white text-decoration-none pb-1  shop-Link'>Shop Now</a>
        </div>
 
      </div>
      <div className="col-md-6 col-lg-6 position-relative ">
        <div className="bg-black item4 item  w-100">
          <img src={img3} alt="img3" className="w-100 h-100" />
        </div>
        <div className="content position-absolute  text-white" >
        <h3 className='mb-0 h4'>Perfume</h3>
        <p className='my-2'>GUCCI INTENSE OUD EDP</p>
        <a className=' text-white text-decoration-none pb-1  shop-Link'>Shop Now</a>
        </div>
     
      </div>
    </div>
  </div>
</div>


        </>
    )
}
