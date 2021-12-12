import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import logger from 'redux-logger';
import lowCode, { lowCodeActions } from './features/lowCode';
import system, { systemActions } from './features/system';

const store = configureStore({
	reducer: {
		lowCode,
		system,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// 抛出dispatch
export type RootDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<RootDispatch>();

// 抛出状态
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// 抛出actions
export const RootActions = {
	lowCode: lowCodeActions,
	system: systemActions,
};

export default store;
