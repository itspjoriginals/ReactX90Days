import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Create routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Optional: handle route-level errors
    errorElement: <h1>Page not found or an error occurred</h1>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
