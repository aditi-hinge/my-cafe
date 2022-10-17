import React from "react";
import { menu } from "../data";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div>
      <p>Today' Menu</p>
      <div>
        {menu.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
