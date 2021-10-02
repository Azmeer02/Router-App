import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../API.json';

function Products() {
  // console.log(Shoes);
    return (
      <div className = "styles">
        {Object.entries(Shoes).map(([id , {name , img }]) => {
          return(<Link className = "link" key = {id} to = {`/products/${id}`}>
            <h2>{name}</h2>
            <img src = {img} alt = {name} height = {250}/>
          </Link>)
        })}
      </div>
    );
}
  
export default Products;


// function Products() {
//   // console.log(Shoes);
//     return (
//       <div className = "styles">
//         {Object.entries(Shoes).map(([id , {name , img }]) => <li key = {id}>
//           <Link to = {`/products/${id}`}>
//             <h2>{name}</h2>
//             <img src = {img} alt = {name} height = {250}/>
//           </Link>
//         </li>)}
//       </div>
//     );
// }