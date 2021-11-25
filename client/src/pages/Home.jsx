import React, { Component } from 'react';

import ProductCards from './components/ProductCards';

import { Box } from '@mui/material';

class Home extends Component {
  render() {
    return (
      <div>
        <Box style={{ padding: '15px', margin: '30px' }}>
          <ProductCards />
        </Box>
      </div>
    );
  }
}

export default Home;
