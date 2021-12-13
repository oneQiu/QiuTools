import { Route } from 'react-router-dom';

export const renderRoute = ({ path, component, children }: RouteProps) => {
	return (
		<Route path={path} key={path} element={component}>
			{children?.map(renderRoute)}
		</Route>
	);
};
