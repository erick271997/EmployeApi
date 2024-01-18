import { useState, useEffect } from 'react';
import ListEmploye from '../Componet/ListEmploye';
import Header from '../Componet/Header';
import Footer from '../Componet/Footer';

function Home() {
 const [apidata, setApidata] = useState([]);
 const [searchValue, setSearchValue] = useState('');
 const [selectedEmployee, setSelectedEmployee] = useState(null);
 const [noResults, setNoResults] = useState(false);

 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setApidata(json))
      .catch(error => console.log('Error:', error));
 }, []);

 function handleSearch(evento) {
    evento.preventDefault();
    const filteredData = apidata.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setNoResults(filteredData.length === 0);
    setApidata(filteredData);
 }

 function handleEmployeeSelect(employee) {
    setSelectedEmployee(employee);
 }

 return (
    <>
      <Header />

      <div className="Search">
        <form onSubmit={handleSearch}>
          <input
            className="inpu-Search"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
          />
          <button className="btn-search">Search</button>
        </form>
      </div>
      <br />
      {noResults ? (
        <p>No se encontraron resultados</p>
      ) : (
        <div className="div-home-employe">
          {apidata.map((item, index) => (
            <div key={index}>
              <ListEmploye
                employes={item}
                onEmployeeSelect={handleEmployeeSelect}
              />
            </div>
          ))}
        </div>
      )}
      {selectedEmployee && (
        <div>
          <h2>{selectedEmployee.name}</h2>
          <p>{selectedEmployee.email}</p>
          <p>{selectedEmployee.zipcode}</p>

        </div>
      )}
  
      <Footer />
      <b/> <b/> <b/>
    </>
 );
}

export default Home;