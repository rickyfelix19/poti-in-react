import React, { Component } from 'react';

import ProductCards from '../components/ProductCards';

import { Container } from '@mui/material';

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <div>this is from Home</div>
          <div>
            <ProductCards />
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
