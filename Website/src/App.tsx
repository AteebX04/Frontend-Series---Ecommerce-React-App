import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import LoginSignup from "./Pages/LoginSignup"
import Cart from "./Pages/Cart"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCategory category="men"/>} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path='/product' element={<Product />} />
            <Route path=':ProductId' element={<Product />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
