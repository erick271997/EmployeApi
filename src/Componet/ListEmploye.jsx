import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Ensayo  from '../Img/imgEnsayo.png'
import { GoXCircleFill } from "react-icons/go";
import { GrConfigure } from "react-icons/gr";



function ListEmploye({employes}) {
  const [avata, Setavata] = useState('');
  
  useEffect(() => {
   Setavata(`https://robohash.org/${employes.name}.png`)



 },);



 
  return (
    <>
     <Link to={{pathname: `/employe/${employes.id}`}}>
   
  <div className='div-ListEmploye'>
    <div className='Box-div-limEmployes'>

    <div className='div-id'>#<p className='p-id'>{employes.id}</p></div>

    <div className='img-listaemploye-div'>
      Name
    <img className='img-listaemploye' src={avata} alt=''/>
    {/* <Link to={{pathname: `/pagar/${employes.id}`}}> */}
     
       <h3 className='h3-name'>{employes.name}</h3>
    {/* </Link> */}
   
    </div>
  
    {/* <h3 className='h3-name'>{employes.avatar}</h3> */}



    <div className='email-employe'> Email<p className='p-email-employe'>{employes.email} </p></div>


    <div className='zip-employe'>
    zipcode
<p className='zip-p-employe'>{employes.address.zipcode} </p>
    </div>
    <div className='web-employe'> 
    website
      <p className='web-p-employe'>{employes.website}</p>
   
    </div>
    <div className='btn-employe-action'>
    Action
   
    <button type="button" class="btn-btn-primary"><GoXCircleFill/></button>
    <div className='btn-btn-danger-div'>
      <button type="button" class="btn-btn-danger">< GrConfigure/> </button>
    </div>
 
    </div>

    </div>
   
      
      {/* <p> {employes.username} </p> */}
    
      {/* <AddressComponent address={employes.address} /> */}

      
        </div>
 
      
      
      </Link> 
     

  </>
  )
}

export default ListEmploye