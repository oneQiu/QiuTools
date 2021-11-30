import LowCode from '@/pages/App/LowCode';
import ReactDnd from '@/pages/App/ReactDnd';

const routeConfig: RouteProps = {
	path: '/app',
	children: [
		{
			path: '/app/lowcode',
			component: <LowCode />,
		},
		{
			path: '/app/react-dnd',
			component: <ReactDnd />,
		},
	],
};
export default routeConfig;
