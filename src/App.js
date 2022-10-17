import "./App.css";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";
import React, { useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [totalItems, setTotalItems] = useState([]);

  const handleChange = (item) => {
    if (cart.indexOf(item) === -1) {
      setCart([...cart, item]);
      item.qty = 1;
    } else {
      item.qty += 1;
    }
    setTotalItems([...totalItems, item]);
    setPrice((prevAmount) => +prevAmount + +item.price);
  };

  console.log(cart);
  return (
    <div className="App">
      <div id="app-container">
        <header id="header">Aditi's Cafe</header>
        <Menu handleChange={handleChange} />
        <Cart cart={cart} price={price} totalItems={totalItems} />
      </div>
    </div>
  );
}

export default App;
