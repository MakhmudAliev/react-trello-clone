import { CardsState } from '../redux/reducers/cardReducer';
import { ColumnState } from '../redux/reducers/columnReducer';
import { AppState } from '../redux/store';
import {storageCardsKey, storageColumnsKey} from "../redux/constants"


export const setCardData = (data: CardsState | ColumnState, key:string): CardsState | ColumnState => {
	localStorage.setItem(key, JSON.stringify(data));
	return data;
};

export const getCardData = (key:string): CardsState | ColumnState => {
	const data: string | null = localStorage.getItem(key); 
	if (!data) {
		return (key === storageCardsKey) ? {cards: []} : {columns: []};
	}
	return JSON.parse(data);
};

