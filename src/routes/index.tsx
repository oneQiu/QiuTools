import Home from '@/pages/Home';
import Layout from '@/layouts';
// 其他路由配置
import appRoutes from './app';

const routeConfig: RouteProps[] = [
	{
		path: '/',
		component: <Layout />,
		children: [
			appRoutes,
			{
				path: '',
				component: <Home />,
			},
		],
	},
];

export default routeConfig;
