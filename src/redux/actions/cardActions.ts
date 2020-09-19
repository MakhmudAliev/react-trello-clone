import { ADD_CARD, ADD_COLUMN } from '../constants';
import { ICard, IColumn } from '../../interface';
import { AnyAction } from 'redux';

export type Action = { type: string; payload: ICard | ICard[] | IColumn | IColumn[] };

export const addCard = (newTask: ICard): Action & AnyAction => {
	return {
		type: ADD_CARD,
		payload: newTask
	};
};

export const addColumn = (newColumn: IColumn): Action & AnyAction => {
	return {
		type: ADD_COLUMN,
		payload: newColumn
	};
};
