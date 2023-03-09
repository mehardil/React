
import './App.css';
import Header from './component/Header';
import ReactDOM from "react-dom/client";
import { createContext, useState } from "react";

export const Globaldata = createContext()
function App() {
 const[Name,setName] =useState("ali")
  return (
    <Globaldata.Provider value={{Name}}>
    <div>
       <Header/>
      </div>
      </Globaldata.Provider>
  );
}

export default App;
