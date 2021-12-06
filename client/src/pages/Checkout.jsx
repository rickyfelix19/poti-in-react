import React, { Component } from 'react';

import Form from '../pages/components/Form';
class Checkout extends Component {
  render() {
    return (
      <div>
        <h3>Please confirm your rental(s)</h3>
        <Form />;
      </div>
    );
  }
}

export default Checkout;
