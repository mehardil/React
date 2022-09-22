import { Card } from "@mui/material";

import React, { useState, useEffect,useContext} from "react";
import axios from "axios";
import Cards from "./Card";
import "./Style.css";



export default function GetData() {
const [Data, setData] = useState("");
useEffect( () => {
    async function fetchData(){
   await axios.get(
        `https://fakestoreapi.com/products/`
      )
      .then((data) => setData(data.data))
      .catch(() => {
        console.log("DATA NOT FOUND");
      });
    }
    fetchData();
  }, []);
  console.log("data-->",Data)
return (
   
    <div className="cardsdata" >
    <Cards  data={Data}/>
    </div>
  );
}
