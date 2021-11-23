import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger();
const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;

export default createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(logger, thunk))
);
