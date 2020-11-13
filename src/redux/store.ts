import { createStore } from 'redux';
import { getCardData } from '../utils';
import rootReducer from './reducers';
import { CardsState } from './reducers/cardReducer';
import { ColumnState } from './reducers/columnReducer';

export interface AppState {
	CardState?: CardsState;
	ColumnState?: ColumnState;
}

// const initialState: AppState = {
// 	CardState: { cards: [{ id: 1, title: 'test1', listId: 1 }] },
// 	ColumnState: { columns: [{ id: 1, title: 'Backlog' }] }
// };

const initialState: AppState = {
		CardState: getCardData("Trello_Clone_Cards"),
		ColumnState: getCardData("Trello_Clone_Columns")
};

console.log("initialState", initialState)

export const store = createStore(
	rootReducer,
	initialState as any,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
