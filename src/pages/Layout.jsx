import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
    const cartProducts = useSelector(state => state.cart.products)
    const count = cartProducts.length;
  return (
    <div className='layout'>
        <div className='header'>
          <div className="container">
            <div className='nav'>
                <span><NavLink to={"/"}>MAIN</NavLink></span>
                <span><NavLink to={"/cart"}>CART</NavLink></span>
            </div>
            <span>Product Count: {count}</span>
          </div>
        </div>
        
        <Outlet/>
    </div>
  )
}

export default Layout