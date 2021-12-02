import React, { Component } from 'react';

import OrderList from '../pages/components/OrderList';

import { Container } from '@mui/material';

class Cart extends Component {
  render() {
    return (
      <div>
        <Container>
          <h3>Your Car Reservation</h3>
          <OrderList />
        </Container>
      </div>
    );
  }
}

export default Cart;
