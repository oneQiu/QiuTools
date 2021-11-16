import Home from '../pages/Home';
import Layout from '../layouts';

const routeConfig: RouteProps[] = [
	{
		path: '/',
		component: <Layout />,
		children: [
			{
				path: '',
				component: <Home />,
			},
		],
	},
];

export default routeConfig;
