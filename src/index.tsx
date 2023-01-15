import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/index';
import reportWebVitals from './reportWebVitals';
import './globalStyle.css';
import Footer from './components/Footer';
import Router from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="mainpage_container">
      <Header />
      <Router />
    </div>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
