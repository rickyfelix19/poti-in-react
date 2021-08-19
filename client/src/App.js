import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

import React from 'react';
import { Container } from '@material-ui/core';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <span className="Footer">
        {' '}
        <Footer />
      </span>
    </React.Fragment>
  );
}

export default App;
