import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../../store/cartReducer';

const ProductCard = ({prod}) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart.products)

  const isInCart = (checkProd) => {
    console.log(cartProducts.includes(checkProd));
    if(cartProducts.includes(checkProd)) return true
    return false
  }

  return (
    <div className='productCard'>
        <h3>{prod.name}</h3>
        <p>{prod.description}</p>

        {isInCart(prod) ? <button onClick={() => {
          dispatch(deleteProduct(prod._id))         
        }}>DELETE FROM CART</button> 
        : 
        <button onClick={() => {
          dispatch(addProduct(prod))          
        }}>ADD TO CART</button>}
        
    </div>
  )
}

export default ProductCard