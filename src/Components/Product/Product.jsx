import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext'
import { Auth } from '../../Context/AuthContext'
import { WishList } from '../../Context/FavContext'

export default function Product({product}) {

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
function addToWishlist(product) {
  if (userLogin) {
    addFav(product)
  }else{
    navigate('/login')
  }
}  


  return (
    <div  className="col-sm-6 col-md-4 col-lg-3" >
      
        <div className="product">

        <div className='position-relative overflow-hidden '>
            <img src={product.image} alt={product.title} className='w-100 rounded-2 imgProduct'/>
            
            <div onClick={()=>addProductCart(product)} className="hoverproduct rounded-bottom rounded-2 rounded-top-0 bg-black text-white text-center p-3 position-absolute end-0 start-0">
            <i className="fa-solid  fa-cart-shopping fa-xl me-2"></i> Add To Cart
            </div>
            <div className=' gap-3 p-3 d-flex flex-column justify-content-center  position-absolute top-0 end-0'>
            <div onClick={()=>addToWishlist(product)} className='icon-product rounded-circle d-flex justify-content-center align-items-center'>
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
          <p className='mb-2 text-danger'>${product.price}</p>
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
  )
}
