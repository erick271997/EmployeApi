// import React, { useState, useEffect } from 'react';




// function App2() {
//   const[lista, setLista]= useState([]);

//  const api =async  () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => setLista(json))
//  }
//   return (
//     <div>
//       <ol>
// {/* {lista?.map(item=>(<li key={item.id}>{item.name}</li>))} */}
//       </ol>
//       <button onClick={api}>
//         Click me!
//       </button>
//       <div>
//         {lista.length > 1 && ( ` ${lista[0].name} ${lista[0].id} ${lista[0].username}`)}
//         <br/>
       
//         <div>
//           <div className='name'>
//             Nombre de:
//              {lista.length > 1 && ( ` ${lista[1].name} `)}
//           </div>
//           <div className='id'>
//             ID:
//            {lista.length> 1 &&( ` ${lista[1].id} `)}
//           </div>
          
//         </div>
       
      
//       </div>
//     </div>
//   )
// }

// export default App2
