import React, { Component } from 'react';

import ProductCards from '../components/ProductCards';
class Home extends Component {
  render() {
    return (
      <div>
        <div>this is from Home</div>
        <div>
          <ProductCards />
        </div>
      </div>
    );
  }
}

export default Home;
