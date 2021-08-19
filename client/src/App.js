import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

import React from 'react';

export default function App() {
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
