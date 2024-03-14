import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './routes/home.jsx';
import Root from './routes/root.jsx';
import ErrorPage from './ui/ErrorPage/index.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  }
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}