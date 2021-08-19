import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './App.css';
import './routes';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

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

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
