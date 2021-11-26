import React, { Component } from 'react';

import ProductCards from './components/ProductCards';

import { Container } from '@mui/material';

class Home extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: '20px 0px' }}>
          <ProductCards />
        </Container>
      </div>
    );
  }
}

export default Home;
