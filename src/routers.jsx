import { createBrowserRouter } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Layout from "./components/Layout/Layout";

export const routers = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />
    },
  ]);