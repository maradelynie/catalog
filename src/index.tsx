import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/index';
import FilterSidebar from './components/FilterSidebar/index';
import reportWebVitals from './reportWebVitals';
import './globalStyle.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <main className="mainpage_container">
      <FilterSidebar />
    </main>
  </React.StrictMode>
);

reportWebVitals();
