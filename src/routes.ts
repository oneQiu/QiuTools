import Home from '@/pages/Home';
import Layout from '@/layouts';
// 其他路由配置
import appRoutes from '@/routers/app';
import Blog from '@/pages/Blog';
import { IRouterConfig } from 'ice';

const routeConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [
      appRoutes,
      {
        path: '/blog/:id',
        component: Blog,
      },
      {
        path: '',
        component: Home,
      },
    ],
  },
];

export default routeConfig;
