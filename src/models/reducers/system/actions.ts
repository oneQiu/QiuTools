/**
 * action 类型
 */
export const SET_LOADING = 'SET_LOADING';
export const setLoading = (data: boolean) => ({
	type: SET_LOADING,
	data,
});

export const SET_TEST = 'SET_TEST';
export const setTest = (data: string) => ({
	type: SET_TEST,
	data,
});

// 常量类型
type ActionType = typeof SET_LOADING | typeof SET_TEST;

// actionData类型
type ActionReturn = Pick<
	ReturnType<typeof setLoading | typeof setTest>,
	'data'
>;

export interface Payload extends ActionReturn {
	type: ActionType;
}
