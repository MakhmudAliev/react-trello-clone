import { AppState } from '../redux/store';

const appKey = 'TRELLO_CLONE_APP';

export const getCardData = (): AppState => {
	const data: string = localStorage.getItem(appKey) || '';
	console.log(data);
	return JSON.parse(data);
};

export const setCardData = (data: AppState): AppState => {
	localStorage.setItem(appKey, JSON.stringify(data));
	return data;
};
