import React, { useContext } from 'react';
import Loading from '../../Components/Loading/Loading';
import { WishList } from '../../Context/FavContext';
import { cartContext } from '../../Context/CartContext';
import {Helmet} from "react-helmet";

export default function Cart() {
  const { isLoading, favs, removeWishlist, deleteProductWishlist } = useContext(WishList);


  let {addCart}=useContext(cartContext)
  function addProductCart(product) {
      addCart(product)
   
  }  

  if (favs.length === 0) {
    return <h1 className="text-center mb-0 py-5 h3 text-muted">Your wishList is empty.</h1>;
  }

  return (
    <>

<Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
        <meta name="description" content="WishlistPage" />
      </Helmet>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="container my-5">
   <div className="d-flex justify-content-between align-items-center my-5">
            <p className='fs-3 mb-0'>Wishlist ({favs.length})</p>
            <button className="btn btn-outline-dark px-lg-5 py-lg-3 " onClick={removeWishlist}>
              Move All To Bag
            </button>
          </div>

          <div className="row">









            {favs.map((pro) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={pro.id}>

                <div className="product">

                  <div className='position-relative  overflow-hidden '>

                    <img src={pro.image} alt={pro.title} className='w-100 rounded-2' />

                    <div onClick={() => addProductCart(pro)} className="curser rounded-bottom rounded-2 rounded-top-0 bg-black text-white text-center p-3 position-absolute bottom-0 end-0 start-0">
                      Add To Cart
                    </div>



                    <div className=' gap-3 p-3 d-flex flex-column justify-content-center  position-absolute top-0 end-0'>
                      <div onClick={() => deleteProductWishlist(pro)} className='icon-product rounded-circle d-flex justify-content-center align-items-center'>
                      <i class="fa-solid fa-trash fa-lg"></i>
                    </div>
                    

                    </div>

                  </div>


                  <p className='my-2 fw-semibold'>{pro.title.split(' ').splice(0, 2).join(' ')}</p>
                  <p className='mb-2 text-danger'>${pro.price} <span className='text-muted text-decoration-line-through ms-2'>$400</span></p>


                </div>

              </div>





            ))}


          </div>


        </div>
      )}
    </>
  );
}
