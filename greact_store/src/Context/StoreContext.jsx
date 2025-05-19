import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"

// Create the context
export const storeContext = createContext()

// Context Provider Component
const StoreContext = ({ children }) => {
  // States
  const [products, setproducts] = useState([])   // ✅ initialized as array
  const [carts, setcarts] = useState([])         // ✅ initialized as array

  // Fetch products from API
  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      console.log("Products fetched:", response.data)
      setproducts(response.data)
    } catch (error) {
      console.error("Error fetching products:", error)
    }
  }

  // useEffect to load products on component mount
  useEffect(() => {
    getData()
  }, [])

  // Add to Cart Handler
  const addToCart = (item) => {
    setcarts([...carts, item]) // ✅ add to cart
    setproducts(products.filter((p) => p.id !== item.id)) // ✅ remove from product list
  }

  //remove from cart handler

  const removeFromCart = (product) => {
  setcarts(carts.filter((p) => p.id !== product.id));
  setproducts([...products, product]); // add back to product list
};

  return (
    <storeContext.Provider value={{ products, carts, addToCart ,removeFromCart}}>
      {children}
    </storeContext.Provider>
  )
}

export default StoreContext
