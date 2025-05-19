import React from 'react'
import {Route,Routes} from 'react-router-dom'
import './App.css'
import { storeContext } from './Context/StoreContext'
import MyCart from './Pages/MyCart'
import Navbar from "./Components/Navbar"
import Product from './Pages/Product'
import StoreContext from './Context/StoreContext'
const App = () => {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={<MyCart/>} path="/mycart" ></Route>
        <Route element={<Product/>} path="/product"></Route>
      </Routes>

    </div>
  )
}

export default App
