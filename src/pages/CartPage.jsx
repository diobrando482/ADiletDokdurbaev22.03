import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard/ProductCard'

const CartPage = () => {
  const cartList = useSelector(state => state.cart.products)
  console.log(cartList);
  if(cartList.length === 0) return <div className='cantainer'>ADD SOMETHING TO UR CART</div>
  return (
    <div className='container'>
        {cartList.map(prod => <ProductCard prod={prod} key={prod.id}/>)}
    </div>
  )
}

export default CartPage