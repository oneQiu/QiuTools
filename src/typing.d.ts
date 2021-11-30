declare interface RouteProps {
	path: string;
	component?: JSX.Element;
	children?: RouteProps[];
	exact?: boolean;
}
