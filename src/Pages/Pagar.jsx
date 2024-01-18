import React from 'react'
import Footer from '../Componet/Footer'
import Header from '../Componet/Header'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Pagar({employes}) {

  const [randomNumber, setRandomNumber] = useState(0);
 const [horas, setHoras] = useState('');
 const [costo, setCosto] = useState('');
 const [salario, setSalario] = useState('');
 const [tax, setTax] = useState('');


 useEffect(() => {
  setRandomNumber(Math.random());
}, []);


 const calcularSalario = () => {
    if (horas === '' || costo === '') {
      alert('Por favor ingrese todos los valores');
      return;
    }

    const horasPorMes = parseInt(horas) * 4;
    const salarioAnual = parseFloat(costo) * horasPorMes;
  


    
    const salarioMensual = salarioAnual * 6.2/100 / 12  ;
    
   

    setSalario(salarioMensual.toFixed(2));
 };

 return (
    <>
      <Header/>
      

      <label>
        Horas por día:
        <input
          type="number"
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
        />
      </label>
      <label>
        Costo por hora:
        <input
          type="number"
          value={costo}
          onChange={(e) => setCosto(e.target.value)}
        />
      </label>
      <button onClick={calcularSalario}>Calcular salario</button>
      <p>Salario mensual:<pa>USD: </pa> {salario}</p>
      <div>
      <p>number transferencia: {randomNumber}</p>

    </div>
    
    

      
      
      <Footer/>
      </>
 )
}

export default Pagar;