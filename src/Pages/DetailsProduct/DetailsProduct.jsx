import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading';
import { cartContext } from '../../Context/CartContext';
import { WishList } from '../../Context/FavContext';
import axios from 'axios';
import {Helmet} from "react-helmet";

export default function DetailsProduct() {


  let { id } = useParams()

let {addCart}=useContext(cartContext)
// 

  const [data, setdata] = useState([])
  const [categoryProduct, setcategoryProduct] = useState([])

  const [isLoading, setisLoading] = useState(false)

  async function getData(id) {
      setisLoading(true)
      try {
          let { data } = await axios.get(`https://fakestoreapi.in/api/products/${id}`)
          setdata(data?.product)
          getCategoryProduct(data?.product?.category)

          console.log(data);

      } catch (error) {
          console.log(error);


      }

      setisLoading(false)


  }


  async  function getCategoryProduct(category) {
    let {data}=await axios.get(`https://fakestoreapi.in/api/products/category?type=${category}`)
    console.log(data.products);
    setcategoryProduct(data.products)
    
  }

  useEffect(() => {
      getData(id)

  }, [id])



// 







// WishList

  let {addFav}=useContext(WishList)
 
  function addProductWishlist(product) {
      addFav(product)
   
  }  

  return (
    <>


<Helmet>
        <meta charSet="utf-8" />
        <title>{data?.title?.split(' ').splice(0,3).join(' ')}</title>
        <meta name="description" content="productDetailsPage" />
      </Helmet>


      {isLoading && !data ?
        <Loading />

        :


        <main className='py-5'>
<nav aria-label="breadcrumb ">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/home" className='nav-link'>Home</Link></li>
                <li className="breadcrumb-item"><Link to={`/category/${data?.category}`} className='nav-link ms-3'>{data?.category}</Link></li>
                <li className="breadcrumb-item"><a href='#' className='nav-link ms-3'>{data?.title?.split(' ').splice(0,3).join(' ')}</a></li>
              </ol>
            </nav>


          <div className="row g-3 g-lg-5 my-5">
            <div className='col-md-5 col-lg-6  '>

                <div >
                  <img src={data?.image} alt=""className="w-100 h-100" />
                </div>
            



            </div>
            <div className="col-md-7 col-lg-6">
              <p className='fs-3 fw-semibold mb-0'>{data?.title?.split(' ').slice(0, 3).join(' ')}</p>
              <div className='d-flex align-items-center gap-1 my-2'>
                <i className="fa-solid fa-star text-yellow"></i>
                <i className="fa-solid fa-star text-yellow"></i>
                <i className="fa-solid fa-star text-yellow"></i>
                <i className="fa-solid fa-star text-yellow"></i>
                <i className="fa-solid fa-star text-yellow"></i>
                <span className='text-muted ms-2'>(150 Reviews)</span>
                <div className='border border-1 border-black border-opacity-50 h-100 py-2 mx-2' ></div>
                <span className='  text-green'>in stock</span>
              </div>

              <p className='lead fs-4 fw-normal mb-3 '>$ {data?.price}.00</p>

              <p className='mb-3'>{data?.description}</p>
              <div className='w-100 border border-1 border-black border-opacity-25'></div>

              {/*add cart */}
               <div className="d-flex align-items-center column-gap-2 justify-content-center my-3">
               <button className='btn btn-orange bg-orange text-white' onClick={()=>addCart(data)}>Add To Cart</button>
              <div onClick={()=>addProductWishlist(data)} className='curser rounded-2 border border-1 border-black border-opacity-50 d-flex justify-content-center align-items-center' style={{height:40,width:40}}>
            <i className="fa-regular fa-heart fa-lg"></i>
            </div>
               </div>

              {/* end cart */}

              <div className='border border-1 border-black border-opacity-75  rounded-2'>

                <div className='p-3 d-flex align-items-center gap-4'>
                  <div>
                  <i class="fa-solid fa-truck-fast fa-2x"></i>
                  </div>
                  <div>
                    <p className=' mb-1 fw-semibold'>Free Delivery</p>
                    <span className='text-decoration-underline fs-p'>Enter your postal code for Delivery Availability</span>                  </div>

                </div>

                <div className='w-100 border border-1 border-black border-opacity-25'></div>

                <div className='p-3 d-flex align-items-center gap-4'>
                  <div>
                    <i class="fa-solid fa-repeat fa-2x"></i>
                  </div>
                  <div>
                    <p className=' mb-1 fw-semibold'>Return Delivery</p>
                    <p className='mb-0 fs-p'>Free 30 Days Delivery Returns. <span className='text-decoration-underline'>Details</span></p>
                  </div>

                </div>

              </div>


            </div>

          </div>

<div className='pt-5'></div>
          <p className='Featured position-relative text-orange'>Related Item</p>

          <div className="row g-4 mt-2">

            {categoryProduct&&categoryProduct.slice(0,4).map((product)=>
              <div  className="col-sm-6 col-md-4 col-lg-3" >
      
              <div className="product">
      
              <div className='position-relative overflow-hidden '>
                  <img src={product.image} alt={product.title} className='w-100 rounded-2' />
                  
                  <div onClick={()=>addCart(product)} className="hoverproduct rounded-bottom rounded-2 rounded-top-0 bg-black text-white text-center p-3 position-absolute end-0 start-0">
                  Add To Cart
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
             
            </div>
            
            )}
          </div>

        </main>
      }




    </>
  )
}
