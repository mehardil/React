import React, { useContext, useState } from "react";
import Home from "./Home";
import Product from "./Product";
import Sellrecord from "./Sellrecord";
import "./Style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Globaldata } from "../App";




export default function Header() {
const Name = useContext(Globaldata)
console.log("name-->",Name)
   
   
 return (
  
    <div>
      <BrowserRouter>
        <div className="headerdiv1">
        <ul className="header">
            <li>
            <Link to="/" >HOME</Link>
            </li>
            <li>
            <Link to="/Product" >PRODUCT</Link> 
            </li>
            <li>
            <Link to="/Sell" >SELL</Link>
            </li>
            </ul>
        <div/>
   
         <Routes>
         <Route path="/" element={<Home />} />
          <Route path="Product" element={<Product />} />
          <Route path="Sell" element={<Sellrecord/>} />
         </Routes>
        
 
        </div>
      </BrowserRouter>
    </div>
  );
}
