import Home from '@/pages/Home';
import Layout from '@/layouts';
// 其他路由配置
import appRoutes from './app';
import Blog from '@/pages/Blog';

const routeConfig: RouteProps[] = [
	{
		path: '/',
		component: <Layout />,
		children: [
			appRoutes,
			{
				path: '/blog/:id',
				component: <Blog />,
			},
			{
				path: '',
				component: <Home />,
			},
		],
	},
];

export default routeConfig;
