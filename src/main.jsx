import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';
import ReactContextProvider from './Provider/ReactContextProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactContextProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer></ToastContainer>
      </HelmetProvider>
    </ReactContextProvider>
  </StrictMode>
);
