import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';

export default (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/success">Success</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/">
          {' '}
          <Home />{' '}
        </Route>
        <Route path="/cart">
          {' '}
          <Cart />{' '}
        </Route>
        <Route path="/checkout">
          {' '}
          <Checkout />{' '}
        </Route>
        <Route path="/success">
          {' '}
          <Success />{' '}
        </Route>
      </Switch>
    </div>
  </Router>
);
