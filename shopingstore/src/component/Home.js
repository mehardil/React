import React, { useContext } from 'react'
import { Globaldata } from "../App";
import Navbar from './Navbar';
import Section from './Section';

export default function Home() {
   const name = useContext(Globaldata)
   console.log("product",name)
    return (
    <div  className="home">
        <div className ="homenav"><Navbar/></div>
        <div className ="homesec"><Section/></div>
       
      
    </div>)
   
}
