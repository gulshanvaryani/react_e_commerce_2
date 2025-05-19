import React, { useContext } from 'react'
import { storeContext } from '../Context/StoreContext'

const MyCart = () => {
  const { carts, removeFromCart } = useContext(storeContext)

  return (
    <div className="mmbox" style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <h1 style={{ color: "white", textAlign: "center", marginBottom: "2rem" }}>🛒 My Cart</h1>

      {carts.length > 0 ? (
        <div className="product-container">
          {carts.map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h2 className="product-title">{item.title}</h2>
              <p className="product-desc">{item.description.slice(0, 150)}...</p>
              <div className="product-footer">
                <p className="product-price">${item.price}</p>
                <button
                  className="add-cart-btn"
                  onClick={() => removeFromCart(item)}
                >
                  Remove From Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: "white", textAlign: "center", fontSize: "1.2rem" }}>
          Your cart is empty.
        </p>
      )}
    </div>
  )
}

export default MyCart
