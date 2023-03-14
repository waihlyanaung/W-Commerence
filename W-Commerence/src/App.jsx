import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { useContextCustom } from './Context/StateContext'
import "./App.css";
import Products from './pages/Products'
import AddToCart from './Components/AddToCart';

const App = () => {
 const {state,dispatch} = useContextCustom()
//  console.log(state);

  return (
    <div ><Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/addtocart' element={<AddToCart/>}/>
        </Routes>
    </div>
  )
}

export default App

