import Navbar from './components/Navbar';
import Footer from './components/Footer';

import React from 'react';
import {
  Container,
}
from '@material-ui/core';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Container>
      <Navbar />
      <Footer />
    </Container>

  );
}

export default App;
