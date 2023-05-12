import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import MainPage from './pages/MainPage'
import CartPage from './pages/CartPage'


function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}></Route>
          <Route path='/cart' element={<CartPage/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
