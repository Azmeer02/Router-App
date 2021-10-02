import React from 'react';
import Shoes from './../API.json'
import { useParams } from 'react-router-dom';

function ProductItem() {
    const {id} = useParams();
    const shoe = Shoes[id]

    if(!shoe){
        return <h2>{id} Not Found</h2>
    }
    const {name , img} = shoe;
    return (
      <div className = "link">
        <h1>{name}</h1>
        <img src = {img} alt = {name} height = {500}/>
      </div>
    );
}
  
export default ProductItem;