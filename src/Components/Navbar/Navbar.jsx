import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import style from './Navbar.module.css'
import { Auth } from '../../Context/AuthContext';
import { cartContext } from '../../Context/CartContext';
import { WishList } from '../../Context/FavContext';

export default function Navbar() {

  const [showList, setshowList] = useState(false)

  const { userLogin, setuserLogin } = useContext(Auth)
  const { cart } = useContext(cartContext)
  const { favs } = useContext(WishList)


  let navigate = useNavigate()

  function Logout() {
    setuserLogin(false)
    localStorage.removeItem('tokenUserRefresh')
    localStorage.removeItem('tokenUser')
    navigate('/login')
  }

  return (
    <>

      {/* nav top */}
      <nav className='bg-dark py-3'>
        <div className="container flex-column-reverse flex-md-row d-flex align-items-end align-items-md-center justify-content-end">
          <p className={`text-white mx-auto mt-3 mt-md-0  text-center mb-0 ${style.pragraph}`}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link className='text-white ms-lg-2 ms-1' to={''}>ShopNow</Link></p>

          <select defaultValue="english" className={`bg-dark border-0 text-white px-2 ${style.selectText}`}>
            <option value="arbic">Arbic</option>
            <option value="english" >English</option>
          </select>
        </div>

      </nav>

      {/* nav down */}
      <nav className=' position-sticky top-0 z-3 p-3 bg-white  mt-lg-4 mt-2 border-bottom border-2 border-black border-opacity-25'>
        <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center ">


          <div className={`d-flex justify-content-between align-items-center  ${style.menu}`}>
            <p className={`mb-0 ${style.logo}`}>Exclusive</p>


            <div className='d-flex align-items-center'>
              {userLogin ?
                <>

                  <div className='position-relative d-lg-none d-block '>                  
                    <Link to='wishlist' className='text-dark '><i className="fa-regular fa-heart  fa-xl"></i></Link>
                    <p className='position-absolute countShop bg-orange text-white'>{favs.length}</p>
                  </div>
                  <div className='position-relative d-lg-none d-block '>
                    <Link to='cart' className='text-dark '><i className="fa-solid fa-cart-shopping fa-xl mx-3"></i></Link>
                    <p className='position-absolute countShop bg-orange text-white'>{cart.length}</p>
                  </div>
                  {/* person */}
                  <Menu menuButton={<MenuButton className={`${style.person} d-lg-none  d-inline-flex justify-content-center align-items-center border-0 bg bg-orange text-white  rounded-circle me-3`}><i className="fa-regular fa-user"></i></MenuButton>}
                    direction={'bottom'}
                    align={'end'}
                    gap={5}
                    arrow={true}
                    transition>
                    <MenuItem><Link to={'/account'} className='nav-link'><i className="fa-regular fa-user me-2"></i> Manage My Account</Link></MenuItem>
                    <MenuItem><p className='mb-0'><i className="fa-solid fa-bag-shopping me-2"></i> My Order</p></MenuItem>
                    <MenuItem><p className='mb-0'><i className="fa-regular fa-circle-xmark me-2"></i>My Cancellations</p></MenuItem>
                    <MenuItem><p className='mb-0'><i className="fa-regular fa-star me-2"></i> My Reviews</p></MenuItem>
                    <MenuItem><p onClick={Logout} className='mb-0 w-100'><i className="fa-solid fa-right-from-bracket me-2"></i> Logout</p></MenuItem>
                  </Menu>


                </>
                : ""}


              {showList ? <i className="fa-solid fa-xmark d-block d-lg-none fa-xl curser" onClick={() => setshowList(false)}></i> :
                <i className="fa-solid fa-bars d-block d-lg-none fa-xl curser" onClick={() => setshowList(true)}></i>}
            </div>

          </div>



          <ul className='list-unstyled   align-items-center mb-0 d-none d-lg-flex'>
            <li className='nav-item mx-lg-3'><NavLink to={'home'} className={`nav-link link ${style.link}`}>Home</NavLink></li>
            <li className='nav-item  mx-lg-3 '><NavLink to={'contact'} className={`nav-link link ${style.link}`}>Contact</NavLink></li>
            <li className='nav-item  mx-lg-3 '><NavLink to={'about'} className={`nav-link link ${style.link}`}>About</NavLink></li>
            <li className='nav-item  mx-lg-3 '><NavLink to={'register'} className={`nav-link link ${style.link}`}>Sign up</NavLink></li>
          </ul>

          <div className='d-none d-lg-flex align-items-center'>
            <div className={`${style.fromNav} position-relative`}>
              <input type="text" className='w-100 py-2 px-4' placeholder='What are you looking for?' />
              <span className={` position-absolute top-50 translate-middle-y ${style.iconSearch}`}> <i className="fa-solid fa-magnifying-glass"></i></span>
            </div>
            <div>
              {userLogin ?
                <>

                  <div className='position-relative d-none d-lg-inline-block '>
                  <Link to='wishlist' className='text-dark'><i className="fa-regular fa-heart mx-lg-4  fa-xl"></i></Link>
                    <p className='position-absolute countfavs bg-orange text-white'>{favs.length}</p>
                  </div>


                  <div className='position-relative d-none d-lg-inline-block '>
                    <Link to='cart' className='text-dark'><i className="fa-solid  fa-cart-shopping fa-xl"></i></Link>
                    <p className='position-absolute countShop bg-orange text-white'>{cart.length}</p>
                  </div>

                  {/* person */}


                  <Menu menuButton={<MenuButton className={`${style.person} d-inline-flex justify-content-center align-items-center border-0 bg bg-orange text-white  rounded-circle ms-4`}><i className="fa-regular fa-user"></i></MenuButton>}
                    direction={'bottom'}
                    align={'end'}
                    gap={10}
                    transition>
                    <MenuItem><Link to={'/account'} className='nav-link'><i className="fa-regular fa-user me-2"></i> Manage My Account</Link></MenuItem>
                    <MenuItem><p className='mb-0'><i className="fa-solid fa-bag-shopping me-2"></i> My Order</p></MenuItem>
                    <MenuItem><p className='mb-0'><i className="fa-regular fa-circle-xmark me-2"></i>My Cancellations</p></MenuItem>
                    <MenuItem><p className='mb-0'><i className="fa-regular fa-star me-2"></i> My Reviews</p></MenuItem>
                    <MenuItem><p onClick={Logout} className='mb-0 w-100'><i className="fa-solid fa-right-from-bracket me-2"></i> Logout</p></MenuItem>

                  </Menu>
                </> : ''}




            </div>

          </div>


          {/* nav mobile */}

          {showList &&

            <>
              <div className={`showList`}>
                <ul className='list-unstyled d-flex flex-column  d-lg-none align-items-center mb-0 mt-3'>
                  <li className='nav-item my-2'><NavLink to={'home'} className={`nav-link link ${style.link}`}>Home</NavLink></li>
                  <li className='nav-item   my-2'><NavLink to={'contact'} className={`nav-link link ${style.link}`}>Contact</NavLink></li>
                  <li className='nav-item   my-2'><NavLink to={'about'} className={`nav-link link ${style.link}`}>About</NavLink></li>
                  <li className='nav-item   my-2'><NavLink to={'register'} className={`nav-link link ${style.link}`}>Sign up</NavLink></li>
                </ul>

                <div className='d-flex flex-column  d-lg-none  align-items-center mt-2 '>
                  <div className={`${style.fromNav} position-relative`}>
                    <input type="text" className='w-100 py-2 px-4' placeholder='What are you looking for?' />
                    <span className={` position-absolute top-50 translate-middle-y ${style.iconSearch}`}> <i className="fa-solid fa-magnifying-glass fa-lg"></i></span>
                  </div>


                </div>
              </div>

            </>}
        </div>
      </nav>


    </>
  )
}
