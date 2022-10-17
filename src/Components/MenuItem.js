import React from "react";

export default function MenuItem({ item, handleChange }) {
  return (
    <div id="container">
      <button className="menu-button" onClick={() => handleChange(item)}>
        <span>{item.name}</span> <span> ¥{item.price}</span>
      </button>
      <span className="quantity-bubble">{item.qty}</span>
    </div>
  );
}
