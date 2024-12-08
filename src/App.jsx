import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Cart from './Pages/Cart/Cart'
import WishList from './Pages/WishList/WishList'
import NotFound from './Components/NotFound/NotFound'
import AuthContextProvider from './Context/AuthContext'
import ProductRoute from './Components/ProductRoute/ProductRoute'
import AuthProductRoute from './Components/ProductRoute/AuthProductRoute'
import Account from './Pages/Account/Account'
import Profile from './Pages/Account/Profile'
import EditDataProfile from './Pages/Account/EditDataProfile'
import DetailsProduct from './Pages/DetailsProduct/DetailsProduct'
import CartContextProvider from './Context/CartContext'
import WishListProvider from './Context/FavContext'
import CategoryProducts from './Components/CategoryProducts/CategoryProducts'

export default function App() {


  const routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [

        { index: true, element: <Navigate to={'register'} /> },
        { path: 'register', element: <AuthProductRoute><Register /></AuthProductRoute> },
        { path: 'login', element: <AuthProductRoute><Login /></AuthProductRoute> },


        { path: 'home', element: <Home /> },
        { path: 'about', element: <ProductRoute><About /></ProductRoute> },
        { path: 'contact', element: <ProductRoute><Contact /></ProductRoute> },
        { path: 'cart', element: <ProductRoute><Cart /></ProductRoute> },
        { path: 'wishlist', element: <ProductRoute><WishList /></ProductRoute> },
        { path: 'detailsproduct/:id', element: <ProductRoute><DetailsProduct /></ProductRoute> },
        { path: 'category/:name', element: <ProductRoute><CategoryProducts /></ProductRoute> },

        {
          path: 'account', element: <ProductRoute><Account /></ProductRoute>, children: [
            { index: true, element: <Navigate to={'profile'} /> },
            { path: 'profile', element: <ProductRoute><Profile /></ProductRoute> },
            { path: 'editprofile', element: <ProductRoute><EditDataProfile /></ProductRoute> },
          ]
        },


        { path: '*', element: <NotFound /> },


      ]
    }
  ])






  return <>
    <AuthContextProvider>
      <CartContextProvider>
        <WishListProvider>
            <RouterProvider router={routers} />
        </WishListProvider>
      </CartContextProvider>
    </AuthContextProvider>


  </>
}
