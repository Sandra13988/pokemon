import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // Importa React Query Devtools
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient();

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} /> 
    </QueryClientProvider>
  </React.StrictMode>
  </BrowserRouter>,
 
);
