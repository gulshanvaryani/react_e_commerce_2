import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className="nav">
    <div className="logo"> <h1>FakeStore</h1></div>
    <div className="box">
         <div className="MyCart"><Link to="/mycart" className='mc'><h1>MyCart</h1></Link></div>
    <div className="product"><Link to="/product" className='pro'><h1>Product</h1></Link></div>
    </div>
   
   </div>
  )
}

export default Navbar
