import React, { useContext } from 'react';
import { storeContext } from '../Context/StoreContext';
import Navbar from '../Components/Navbar';

const Product = () => {
  const { products,addToCart } = useContext(storeContext);

  return (
  <div className="product-wrapper">
  <h1 className="product-heading">Products</h1>

  <div className="product-container">
    {products && products.length > 0 ? (
      products.map((dets, id) => (
        <div className="product-card" key={id}>
          <div className="product-image">
            <img src={dets.image} alt={dets.title} />
          </div>
          <div className="product-title">{dets.title}</div>
          <div className="product-desc">{dets.description}</div>
          <div className="product-footer">
            <span className="product-price">${dets.price}</span>
            <button className="add-cart-btn" onClick={() => addToCart(dets)}>
              Add To Cart
            </button>
          </div>
        </div>
      ))
    ) : (
      <p style={{ color: "white" }}>Loading products...</p>
    )}
  </div>
</div>

  );
};

export default Product;
