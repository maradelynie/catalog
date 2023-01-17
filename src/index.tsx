import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import GlobalStyle, { GlobalContainer } from './theme/globalStyle';

import Background from './components/Background';
import Footer from './components/Footer';
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
        <GlobalStyle />
        <GlobalContainer>
          <Router />
        </GlobalContainer>
        <Footer />
        <Background />
      </>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
