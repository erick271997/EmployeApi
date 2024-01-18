
import  React  from "@babel/types";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '.';
import axios from 'axios';
import Layout from './Componet/Layout';
import Home from "./Pages/Home";
import './Estilos/App.css'
import Employe from "./Pages/Employe";
import Pagar from "./Pages/Pagar";



function App() {
  const [items, setItems] = useState([]);
  
  

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
 }, []);


 
  return (
    <>
     <BrowserRouter>
      
      <Routes>

         <Route index element={<Home/>}>
      </Route>

      <Route path="/home" element={<Home/>}></Route>

      <Route path="/employe/:id" element={<Employe/>}></Route>
    
     <Route path="/pagar" element= {<Pagar/>}></Route>



     
       </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
