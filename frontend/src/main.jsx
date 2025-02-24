import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import router from './router/router.jsx';
// import booksApi from './redux/features/books/booksApi.js'
// import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { Provider } from 'react-redux'
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>,
)