import React from 'react';
import poster from './../ShoesPoster.jpg'

function Home() {
    return (
      <div>
        <div className = "image">
        <img src = {poster} alt = "Shoes"/>
        </div>
        <h1>Welcome To Home</h1>
      </div>
    );
}
  
export default Home;