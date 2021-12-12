/**
 * 系统模块
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SystemState {
	loading: boolean;
}

const initialState: SystemState = {
	loading: false,
};

export const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		setLoading: (state) => {
			state.loading = !state.loading;
		},
	},
});

export const systemActions = systemSlice.actions;

export default systemSlice.reducer;
