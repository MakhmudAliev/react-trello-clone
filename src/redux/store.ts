import { createStore } from 'redux';
import { getCardData } from '../utils';
import rootReducer from './reducers';
import { CardsState } from './reducers/cardReducer';
import { ColumnState } from './reducers/columnReducer';
import { storageCardsKey, storageColumnsKey } from "../redux/constants"

export interface AppState {
	CardState?: CardsState;
	ColumnState?: ColumnState;
}

// const initialState: AppState = {
// 	CardState: { cards: [{ id: 1, title: 'test1', listId: 1 }] },
// 	ColumnState: { columns: [{ id: 1, title: 'Backlog' }] }
// };

const initialState: AppState = {
		CardState: getCardData(storageCardsKey),
		ColumnState: getCardData(storageColumnsKey)
};

export const store = createStore(
	rootReducer,
	initialState as any,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
