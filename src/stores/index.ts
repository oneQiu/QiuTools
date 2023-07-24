import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';
import userSlice from './user';

const logger = createLogger({
  diff: true,
});

const rootReducers = combineReducers({
  user: userSlice.reducer,
});

const store = configureStore({
  reducer: rootReducers,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(logger);
  },
});

export type RootState = ReturnType<typeof rootReducers>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
