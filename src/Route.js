import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Navigation';
import Home from './Components/Home';
import Products from './Components/Products';
import ProductItem from './Components/Product Item';

function BaseRoot() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/products" component = {Products}/>
          <Route path = "/products/:id" component = {ProductItem}/>
        </Switch>
      </Router>
    </div>
  );
}
  
export default BaseRoot;