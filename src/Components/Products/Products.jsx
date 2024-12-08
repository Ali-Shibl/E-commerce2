import React, { useState }  from 'react'
import Loading from '../Loading/Loading'
import useFetchData from '../../Hook/useFetchData';
import Product from '../Product/Product';

export default function Products() {

  let {data,isLoading}=useFetchData('https://fakestoreapi.in/api/products')
  const [ShowAllProducts, setShowAllProducts] = useState(false)
      
  return (
  <>
   <p className='Featured position-relative  mt-5 mb-4 text-orange'>Our Products</p>
      <div className='d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end gap-3 gap-md-0 mb-2'>
        <div>
          <h2 className='mb-0 h1'>Explore Our Products</h2>      
        </div>

        <div>
         <button className='btn bg-orange btn-orange text-white d-block m-auto mt-3' onClick={() => setShowAllProducts(!ShowAllProducts)}>
          {ShowAllProducts ? 'hide' : 'View All'}
         </button>
        </div>

      </div>


      {ShowAllProducts ?

<>
  {isLoading ? <Loading /> :
    <div className="row g-4 py-4"  >
      {data.products?.map((product) => 
      <Product product={product} key={product.id}/>
    )}
    </div>
  }
</>
:
<>
  {isLoading ? <Loading /> :
      <div className="row g-4 py-4"  >
      {data.products?.slice(0,4).map((product) => 
      <Product product={product} key={product.id}/>
    )}
    </div>
  }

</>}

  
  
  </>
  )
}
