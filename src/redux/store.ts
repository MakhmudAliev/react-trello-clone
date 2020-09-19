import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const initialState = {};

export const store = createStore(
	rootReducer,
	initialState,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
