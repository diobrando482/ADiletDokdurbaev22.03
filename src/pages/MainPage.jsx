import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard/ProductCard'
import { fetchProductList } from '../store/productsListReducer'

const MainPage = () => {
  const {products, error, loading} = useSelector(state => state.productsList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductList())
    console.log(products);
    console.log(error);
    console.log(loading);
  }, [  ])
  useEffect(() => {
    console.log(products);
  }, [ products ])


  if(loading) return <h2>LOADING</h2>
  if(error) return <h2>{error}</h2>
  return (
    <div className='container'>
        {products.map(prod => <ProductCard prod={prod} key={prod.id}/>)}
    </div>
  )
}

export default MainPage