import { useState, useEffect } from 'react';
import axios from 'axios';
import ListEmploye from '../Componet/ListEmploye';
import Header from '../Componet/Header';



function Home() {
 const [apidata, setApidata] = useState([]);
 const [lista, setLista] = useState('');

 useEffect(() => {
  fetch(' https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setApidata(json))
    .catch(error => console.log('Error:', error));
    
    const firstItem = apidata.find(item => item);
    setLista(firstItem ? firstItem.name : 'No hay elementos en la lista');

    
}, [apidata]);
    




 return (
  <>
  <Header/>

    <div>
      {apidata.map((item, index) => (
        <div key={index}>
          <ListEmploye employes={item}/>
          
         
           
        </div>
      ))}
    
    </div>

    </>
 );
}

export default Home;