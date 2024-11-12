import React from "react";

function MenuItem({ image, name, price, addToCart }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>Rs. {price}</p>
      <button className="addToCartButton" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default MenuItem;
