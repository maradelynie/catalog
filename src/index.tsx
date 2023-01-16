import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import './globalStyle.css';
import Background from './components/Background';
import Footer from './components/Footer';
import Header from './components/Header/index';
import reportWebVitals from './reportWebVitals';
import Router from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <>
        <div className="mainpage_container">
          <Router />
        </div>
        <Footer />
        <Background />
      </>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
