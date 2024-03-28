import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import Accueil from './routes/accueil.jsx';
import ErrorPage from './ui/ErrorPage/index.jsx';

import './index.css';
import CreationCompte from './routes/creationcompte.jsx';
import Caries from './routes/caries.jsx';
import Preambule from './routes/preambule.jsx';
import Dents from './routes/dents.jsx';
import Info from './routes/info.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/accueil",
    element: <Accueil />
  },
  {
    path: "/ajoutercompte",
    element: <CreationCompte />
  },
  {
    path: "/caries",
    element: <Caries />
  },
  {
    path: "/preambule",
    element: <Preambule />
  },
  {
    path: "/dents",
    element: <Dents />
  },
  {
    path: "/info",
    element: <Info />
  },
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
