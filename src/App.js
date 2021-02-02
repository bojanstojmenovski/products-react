import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from './components/NavBar';
import Products from './components/Products';
import ProductPage from './components/ProductPage'; 

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path={'/'} exact component={Products} />
          <Route path={'/:id'} component={ProductPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
