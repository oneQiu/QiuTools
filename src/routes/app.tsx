import LowCode from '@/pages/App/LowCode';
import ReactDnd from '@/pages/App/ReactDnd';
import CodeToJson from '@/pages/App/CodeToJson';

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
		{
			path: '/app/codeToJson',
			component: <CodeToJson />,
		},
	],
};
export default routeConfig;
