import { Suspense } from 'react';
import { Routes } from 'react-router-dom';
import routeConfig from './routes';
import { renderRoute } from '@/routes/routeTools';

export default () => {
	return (
		<Suspense fallback={<div>加载中...</div>}>
			<Routes>{routeConfig.map(renderRoute)}</Routes>
		</Suspense>
	);
};
