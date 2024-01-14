import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../Img/logo3.png'
import Home from '../Img/home.png'

const Header = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
 };

 return (

    <header className="responsive-header"> 


          <div className="div-header-home">

   
   <Link to='/'><img src={Home} className='home' alt="home"></img></Link>
     </div>
     <div className="container-header">


       <button className="btn-header" onClick={handleMenuToggle}>
      <img src={logo} className='logo' alt='logo'/>
      .
      </button>
      {isMenuOpen && (
        <nav className="nav-header">
          <ul className="ul-header">
         
            <li>
              <a className="ul-Inicio" href="/">Inicio</a>
            </li>
            <li>
              <Link className="ul-acerca" to="/acerca">Acerca de</Link>
            </li>
            <li>
              <Link className="ul-cont" to={"/pagar"}>Pagar</Link>
            </li>
          </ul>
        </nav>
        
        
      )}
     
          </div> 
        
         
    </header>
 
 );
};

export default Header;