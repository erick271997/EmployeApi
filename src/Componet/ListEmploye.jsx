import React from 'react'
import { Link } from 'react-router-dom'

function ListEmploye({employes}) {



  const AddressComponent = ({ address }) => {
    const addressString = Object.keys(address)
       .map(key => `${key}: ${address[key]}`)
       .join(', ');
 
    return <div>{addressString}</div>;
  };
  return (
    
  <div>
    <Link to={{pathname: `/employe/${employes.id}`}}>
      <h1>{employes.name}</h1>
      <p>Age :{employes.username} </p>
      <p>{employes.email} </p>
      {/* <AddressComponent address={employes.address} /> */}

      
      
      
      
      
      </Link> 
 

  </div>
  )
}

export default ListEmploye