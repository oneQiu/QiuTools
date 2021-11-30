import { Payload, SET_LOADING } from './actions';

interface IState {
	loading: boolean;
	test: string;
}

const initState: IState = {
	loading: false,
	test: '',
};

export default (state = initState, payload: Payload): IState => {
	switch (payload.type) {
		case SET_LOADING:
			break;

		default:
			break;
	}
	return { ...state };
};
