import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import WebFont from 'webfontloader';

import App from './App';
import Notification from './pages/components/NotificationBox';
import ProductCards from './pages/components/ProductCards';

WebFont.load({
  google: {
    families: ['Noto Sans', 'sans-serif']
    // Noto Sans: Regular, Italic, Bold, Bold Italic
  }
});

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Notification /> */}
    <ProductCards />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
