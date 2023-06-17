import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import Layout from '@/layout';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);

