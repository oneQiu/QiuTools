import { useNavigate, NavigateOptions, useLocation } from 'react-router-dom';

interface PushOptions extends NavigateOptions {
	params?: { [key: string]: number | string | boolean };
}
export default () => {
	const navigator = useNavigate();
	/** 路由前进 */
	const push = (url: string, { params, ...options }: PushOptions = {}) => {
		let urlStr = url;
		if (params) {
			Object.keys(params).forEach((i, idx) => {
				urlStr += `${idx === 0 ? '?' : '&'}${i}=${params[i]}`;
			});
		}
		navigator(urlStr, options);
	};

	/** 后退 */
	const back = (delta: number) => {
		navigator(delta);
	};

	return {
		push,
		back,
	};
};
