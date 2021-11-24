import React, { Component } from 'react';

import OrderList from '../pages/components/OrderList';

class Cart extends Component {
  render() {
    return (
      <div>
        <div>this is cart</div>
        <div>
          <OrderList />
        </div>
      </div>
    );
  }
}

export default Cart;
