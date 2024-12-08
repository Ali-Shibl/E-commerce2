import React, { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import Loading from '../../Components/Loading/Loading';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

export default function Cart() {
  const { isLoading, cart, deleteProduct, removeCart } = useContext(cartContext);

  if (cart.length === 0) {
    return <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
        <meta name="description" content="CartPage" />
      </Helmet>
    <div>
    <nav aria-label="breadcrumb" className='mt-5'>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/home" className='nav-link'>Home</Link></li>
                <li className="breadcrumb-item"><a href='#' className='nav-link ms-3'>Cart</a></li>
              </ol>
            </nav>
          <h1 className="text-center mb-0 py-5 h3 text-muted">Your cart is empty.</h1>

    </div>
    
    </>
  }

  return (
    <>

<Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
        <meta name="description" content="CartPage" />
      </Helmet>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mt-5">
           <nav aria-label="breadcrumb ">
              <ol className="breadcrumb mb-4 mb-md-0">
                <li className="breadcrumb-item"><Link to="/home" className='nav-link'>Home</Link></li>
                <li className="breadcrumb-item"><a href='#' className='nav-link ms-3'>Cart</a></li>
              </ol>
            </nav>
          <div className="row d-none d-md-flex mb-3 fw-bold bg-light py-2 rounded mt-5 py-3 shadow">
            <div className="col-md-4 text-center">Product</div>
            <div className="col-md-3 text-center">Price</div>
            <div className="col-md-3 text-center">Category</div>
            <div className="col-md-2 text-center">Delete</div>
          </div>

          {cart.map((pro) => (
            <div
              key={pro.id}
              className="row align-items-center mb-3 border-bottom py-3 shadow"
            >
              <div className="col-12 col-md-4 text-center d-flex flex-column flex-lg-row align-items-center">
                <img
                  src={pro.image ? pro.image : ''}
                  alt={pro.title}
                  className="img-fluid rounded imgCart"
                 
                />
                <p className="ms-2 mb-0 fw-semibold">{pro.title?.split(' ').splice(0,2).join(' ')}</p>
              </div>
              <div className="col-12 col-md-3 text-center ">
                <p className="fs-5 text-success mb-0 mt-2  my-mt-0 ">${pro.price}</p>
              </div>
              <div className="col-12 col-md-3 text-center ">
                <p className="fs-5 mb-0">{pro.category}</p>
              </div>
              <div className="col-12 col-md-2 text-center mt-md-0 mt-2">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteProduct(pro)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className="text-center my-5">
            <button className="btn btn-danger btn-lg" onClick={removeCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
