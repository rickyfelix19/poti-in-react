import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';

import Navbar from './pages/Navbar';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/home">
              <Navbar />
              <Home />
            </Route>
            <Route exact path="/cart">
              <Navbar />
              <Cart />
            </Route>
            <Route exact path="/checkout">
              <Navbar />
              <Checkout />
            </Route>
            <Route exact path="/success">
              <Navbar />
              <Success />
            </Route>
            <Route exact path="/">
              <Navbar />
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

//  ReactDOM.render(
//    <BrowserRouter>
//      <App />
//    </BrowserRouter>,
//    document.getElementById('root')
//  )
