import { CardsState } from '../redux/reducers/cardReducer';
import { ColumnState } from '../redux/reducers/columnReducer';
import { AppState } from '../redux/store';


export const setCardData = (data: AppState | CardsState | ColumnState, key:string): AppState | CardsState | ColumnState => {
	localStorage.setItem(key, JSON.stringify(data));
	return data;
};

export const getCardData = (key:string): any => {
	const data: string = localStorage.getItem(key) || '';
	if (data === '') {
		return {
			cards: [],
			columns: []
		};
	}
	console.log("Local Storage ->", data);
	return JSON.parse(data);
};

