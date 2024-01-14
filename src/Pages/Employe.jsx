import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Componet/Header';

const Employe = () => {
 const { id } = useParams();
 const [product, setProduct] = useState(null);

 useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
 }, [id]);

 if (!product) {
    return <div>Loading...</div>;
 }

 return (
   <>
   <Header/>
    <div>
      <h1>{product.name}</h1>
      <p>{product.username}</p>
      <p>{product.email}</p>
    </div>
    </>
 );
};

export default Employe;