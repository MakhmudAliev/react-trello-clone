import { ADD_CARD, ADD_COLUMN } from '../constants';
import { ICard, IColumn } from '../../interface';
import { AnyAction } from 'redux';

export type Action = { type: string; payload: ICard | ICard[] | IColumn | IColumn[] };

export const addCard = (newCard: ICard): Action & AnyAction => {
	return {
		type: ADD_CARD,
		payload: newCard
	};
};

export const addColumn = (newColumn: IColumn): Action & AnyAction => {
	console.log('add column', newColumn);
	return {
		type: ADD_COLUMN,
		payload: newColumn
	};
};
