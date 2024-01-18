import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Footer from '../Componet/Footer';
import Header from '../Componet/Header';
import Pagar from './Pagar';
import User from '../Img/home.png'




const Employe = () => {
 const { id } = useParams();
 const [employe, setemploye] = useState(null);
 const location = useLocation();
  
const [avata, setAvata] = useState('');

  


useEffect(() => {
  setAvata(
    `https://robohash.org/.png${id}`
    )


   } )
 

  
  

 useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setemploye(data);
    };


    fetchProduct();
 }, [id]);

 if (!employe) {
    return <div>Loading...</div>;
 }

 return (
    <>
      <Header/>
      <div className='div-info'>
        <h1 className='h1-inform'>Information del empleado</h1>
      </div>
      <div className='employe-div'>
        <figure>
          <img className='employe-img' src={avata} alt='empleado'/>
          </figure>
        <div className='div-employe-info'>

  
        <p>Name: {employe.name}</p>
        <p className='Username'>Username: {employe.username}</p>
        <p >Email: {employe.email}</p>
        <p className='Username'>Street:{employe.address.street}</p>
        <p>Suite:{employe.address.suite}</p>
        <p className='Username'>City:{employe.address.city}</p>
        <p>Zipcode:{employe.address.zipcode}</p>
             </div>
            
            
          
             <div className='employe-div2'>
              <p className='employe-phone'><p className='p'>Phone</p> {employe.phone}</p>
              <p className='employe-websaite-p'> <p className='p'>Website</p>{employe.website}</p>
              <p className='employe-coma-name'><p className='p'>Company-name</p>{employe.company.name}</p>
              <p className='eomloye-ca '><p className='p'>CatchPhrase</p>{employe.company.catchPhrase}</p>
              <p><p className='p'>Bs</p>{employe.company.bs}</p>

             </div>
            
  <Link className='link-pagar-emplo' to={'/pagar'}>
  <button className="btn-link">Pagar {employe.name}</button>
        

        
      </Link>
 
      </div>
      <div>
    
       
      </div>
      <Footer/>
    </>
 );
};

export default Employe;