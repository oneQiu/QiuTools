import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import Layout from '@/layout';
import app from '@/routes/appRoutes.tsx';
import Blog from '@/pages/blog';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      app,
      {
        path: '/blog/:id',
        element: <Blog />
      },
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);

