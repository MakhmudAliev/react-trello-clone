const appKey = 'TRELLO_CLONE_APP';

export const getCardData = () => {
	return JSON.parse(localStorage.getItem(appKey));
};
/*
export const setCardData = (data) => {
	localStorage.setItem(appKey, JSON.stringify(data));
	return data;
};
*/
