import React from "react";
import { menu } from "../data";
import MenuItem from "./MenuItem";

export default function Menu({ handleChange }) {
  return (
    <div id="menu-container">
      <p id="menu-heading">Today' Menu</p>
      <div id="menu-box">
        {menu.map((item) => (
          <MenuItem item={item} key={item.id} handleChange={handleChange} />
        ))}
      </div>
    </div>
  );
}
