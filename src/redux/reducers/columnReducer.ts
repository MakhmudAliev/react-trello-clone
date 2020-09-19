import { ADD_COLUMN } from '../constants';
import { getCardData } from '../../utils';
import { IColumn } from '../../interface';
import { Action } from '../actions/cardActions';

export interface ColumnState {
	columns: IColumn[];
}

const initialState = getCardData() || { columns: [] };

export default function (state: ColumnState = initialState, action: Action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_COLUMN: {
			return { ...state, columns: [...state.columns, payload] };
		}
		default:
			return state;
	}
}
