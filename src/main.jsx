import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import Accueil from './routes/accueil.jsx';
import ErrorPage from './ui/ErrorPage/index.jsx';

import './index.css';
import CreationCompte from './routes/creationcompte.jsx';
import Caries from './routes/caries.jsx';
import Preambule from './routes/preambule.jsx';
import Dents from './routes/dents.jsx';
import Info from './routes/info.jsx';
import Quizz from './routes/quizz/quizz.jsx';
import Quizz2 from './routes/quizz/quizz2.jsx';
import Aliments from './routes/aliments.jsx';
import Recette from './routes/recette.jsx';
import Chrono from './routes/chrono.jsx';

const router = createBrowserRouter([
  {
    path: `/~thore2/robin-le-requin/`,
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/~thore2/robin-le-requin/accueil",
    element: <Accueil />
  },
  {
    path: "/~thore2/robin-le-requin/ajoutercompte",
    element: <CreationCompte />
  },
  {
    path: "/~thore2/robin-le-requin/caries",
    element: <Caries />
  },
  {
    path: "/~thore2/robin-le-requin/preambule",
    element: <Preambule />
  },
  {
    path: "/~thore2/robin-le-requin/dents",
    element: <Dents />
  },
  {
    path: "/~thore2/robin-le-requin/info",
    element: <Info />
  },
  {
    path: "/~thore2/robin-le-requin/quizz",
    element: <Quizz />
  },
  {
    path: "/~thore2/robin-le-requin/quizz2",
    element: <Quizz2 />
  },
  {
    path: "/~thore2/robin-le-requin/aliments",
    element: <Aliments />
  },
  {
    path: "/~thore2/robin-le-requin/recette",
    element: <Recette />
  },
  {
    path: "/~thore2/robin-le-requin/chrono",
    element: <Chrono />
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