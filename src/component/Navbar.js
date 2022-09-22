import React from "react";
import "./Style.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li><button>About</button></li>
          <li><button>Order</button></li>
          {/* add button product on which selection option open */}
          <select name="Product" id="cars">
            <option value="inventory">inventory</option>
            <option value="collation">collation</option>
        </select>
        </ul>
      </div>
    </div>
  );
}
