import React, { Component } from 'react';

import ProductCards from './components/ProductCards';

import { Container } from '@mui/material';

class Home extends Component {
  render() {
    return (
      <div>
        <Container sx={{ marginTop: '30px', marginBottom: '110px' }}>
          <ProductCards />
        </Container>
      </div>
    );
  }
}

export default Home;
