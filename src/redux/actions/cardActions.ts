// import { ADD_CARD } from '../constants';
import { ICard } from '../../interface';

export type Action = { type: 'ADD_CARD'; payload: ICard };

export const addCard = (newTask: ICard): Action => {
	return {
		type: 'ADD_CARD',
		payload: newTask
	};
};
