import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import axios from 'axios'
import Product from '../Product/Product'
import {Helmet} from "react-helmet";

export default function CategoryProducts() {


const {name}=useParams()

const [products, setproducts] = useState([])
const [isLoading, setisLoading] = useState(false)

async  function getCategoryProducts(category) {
    setisLoading(true)
    let {data}=await axios.get(`https://fakestoreapi.in/api/products/category?type=${category}`)
    console.log(data.products);
    setproducts(data.products)
    setisLoading(false)
  }

useEffect(() => {
 getCategoryProducts(name)
}, [name])


  return (
    <>
 <Helmet>
        <meta charSet="utf-8" />
        <title>{name}</title>
        <meta name="description" content="AccountPage" />
      </Helmet>

     {isLoading ? <Loading /> : <div className="row py-5 g-4">
               
                {products?.map((product) => <Product product={product} key={product.id}/>)}

            </div>

            }
    
    </>
  )
}
