import { createStore } from 'redux';
import rootReducer from './reducers';
import { CardsState } from './reducers/cardReducer';
import { ColumnState } from './reducers/columnReducer';

export interface AppState {
	CardState: CardsState;
	ColumnState: ColumnState;
}

const initialState: AppState = {
	CardState: { cards: [] },
	ColumnState: { columns: [] }
};

// Cards = { cards: [{title:"asda"}, {}] }
// Lists = { lists: [{}, {}] }

export const store = createStore(
	rootReducer,
	initialState as any,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
