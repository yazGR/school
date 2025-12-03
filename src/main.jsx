import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './pages/Dashboard';
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router =  createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />
    },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
