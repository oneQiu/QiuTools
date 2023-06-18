import { type RouteObject } from 'react-router-dom';
import Console from '@/pages/app/lowcode/console';

const appRoutes: RouteObject = {
  path: '/app',
  children: [
    {
      path: '/app/lowcode/console',
      element: <Console />
    },
  ]
};

export default appRoutes;
