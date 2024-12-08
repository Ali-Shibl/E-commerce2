import React, { useContext, useEffect, useRef, useState } from 'react'
import './SliderFlashSales.css'
import axios from 'axios';
import Loading from '../Loading/Loading';
import useFetchData from '../../Hook/useFetchData';
import Product from '../Product/Product';
import { Link, useNavigate } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import { Auth } from '../../Context/AuthContext';
import { WishList } from '../../Context/FavContext';
export default function SliderFlashSales() {

  let { data, isLoading } = useFetchData('https://fakestoreapi.in/api/products?limit=15')

  let {addCart}=useContext(cartContext)
  let {addFav}=useContext(WishList)
  let {userLogin}=useContext(Auth)
let navigate=useNavigate()
function addProductCart(product) {
  if (userLogin) {
    addCart(product)
  }else{
    navigate('/login')
  }
}  
function addProductWishlist(product) {
  if (userLogin) {
    addFav(product)
  }else{
    navigate('/login')
  }
}  

  const [ShowAllProducts, setShowAllProducts] = useState(false)


  const ref = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlider = () => {
    const totalSlides = ref.current.children.length;
    if (currentSlide >= totalSlides - 1) return;

    setCurrentSlide(currentSlide + 1);
  };

  const prevSlider = () => {
    if (currentSlide <= 0) return;

    setCurrentSlide(currentSlide - 1);
  };


  const sliderStyle = {
    transform: `translateX(-${currentSlide * 100}%)`,
  };







  return (
    <>
      <p className='Featured position-relative  mt-5 mb-4 text-orange'>Today's</p>
      <div className='d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end gap-3 gap-md-0 mb-2'>
        <div className='d-flex flex-column flex-lg-row align-items-start align-items-lg-end  gap-3 gap-lg-5'>
          <h2 className='mb-0 h1'>Flash Sales</h2>
          <div className='d-flex  gap-2 align-items-end ms-lg-5'>
            <div>
              <p className='mb-0'>days</p>
              <p className='fs-2 fw-bold mb-0'>03</p>
            </div>
            <div>
              <p className='mb-0 fs-2 fw-bold text-orange'>:</p>
            </div>
            <div>
              <p className='mb-0'>Hours</p>
              <p className='fs-2 fw-bold mb-0'>23</p>
            </div>
            <div>
              <p className='mb-0 fs-2 fw-bold text-orange'>:</p>
            </div>
            <div>
              <p className='mb-0'>Minutes</p>
              <p className='fs-2 mb-0 fw-bold'>19</p>
            </div>
            <div>
              <p className='mb-0 fs-2 fw-bold text-orange'>:</p>
            </div>
            <div>
              <p className='mb-0'>Seconds</p>
              <p className='fs-2 fw-bold mb-0'>56</p>
            </div>

          </div>

        </div>

        {!ShowAllProducts ?   <div className="d-flex align-items-center gap-3">

          <div className="arrow-next curser d-flex justify-content-center align-items-center" onClick={prevSlider} >
            <i className="fa-solid fa-arrow-left"></i>
          </div>

          <div className="arrow-prev curser d-flex justify-content-center align-items-center" onClick={nextSlider}>
            <i className="fa-solid fa-arrow-right"></i>
          </div>

        </div>:''}

      </div>


      {ShowAllProducts ?

        <>
          {isLoading ? <Loading /> :
            <div className="row g-4 py-4"  >
              {data.products?.map((product) =>
                <Product product={product} key={product.id} />
              )}
            </div>
          }
        </>
        :
        <>

          {isLoading ? <Loading /> :
            <div className="sliderHome py-4" ref={ref} >
              {data.products?.map((product) => <div key={product.id} className="item" style={sliderStyle}>
                <div className=" product">
                  <div className='position-relative overflow-hidden '>
                    <img src={product.image} alt={product.title} className='w-100 rounded-2 imgProduct' />
                    <div onClick={()=>addProductCart(product)} className="hoverproduct rounded-bottom rounded-2 rounded-top-0 bg-black text-white text-center p-3 position-absolute end-0 start-0">
                    <i className="fa-solid  fa-cart-shopping fa-xl me-2"></i> Add To Cart

                    </div>
                    <div className=' gap-3 p-3 d-flex flex-column justify-content-center  position-absolute top-0 end-0'>
                      <div onClick={()=>addProductWishlist(product)} className='icon-product rounded-circle d-flex justify-content-center align-items-center'>
                        <i className="fa-regular fa-heart"></i>
                      </div>

                      <Link to={`/detailsproduct/${product.id}`} className='nav-link'>
                        <div className='icon-product rounded-circle d-flex justify-content-center align-items-center'>
                          <i className="fa-regular fa-eye"></i>
                        </div>
                      </Link>

                    </div>
                    <div className='position-absolute top-0 start-0 m-3'>
                      <button className='btn btn-danger btn-sm rounded-2'>-35%</button>
                    </div>
                  </div>


                  <p className='my-2 fw-semibold'>{product.title.split(' ').splice(0, 2).join(' ')}</p>
                  <p className='mb-2 text-danger'>${product.price} <span className='text-muted text-decoration-line-through ms-2'>$400</span></p>
                  <div className='d-flex align-items-center gap-1'>
                    <i className="fa-solid fa-star text-yellow"></i>
                    <i className="fa-solid fa-star text-yellow"></i>
                    <i className="fa-solid fa-star text-yellow"></i>
                    <i className="fa-solid fa-star text-yellow"></i>
                    <i className="fa-solid fa-star text-yellow"></i>
                    <span className='text-muted ms-2'>(99)</span>
                  </div>





                </div>
              </div>)}
            </div>
          }

        </>}
      <button className='btn bg-orange btn-orange text-white d-block m-auto mt-3' onClick={() => setShowAllProducts(!ShowAllProducts)}>
        {ShowAllProducts ? 'hide' : 'View All Products'}
      </button>


      <div className='w-100 border border-1 border-black border-opacity-10 my-3 my-lg-5'></div>





    </>

  )
}
