import { ADD_CARD } from '../constants';
import { ICard } from '../../interface';

export type Action = { type: string; payload: ICard | ICard[] };

export const addCard = (newTask: ICard): Action => {
	return {
		type: ADD_CARD,
		payload: newTask
	};
};
