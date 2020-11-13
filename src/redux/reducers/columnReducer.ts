import { ADD_COLUMN } from '../constants';
// import { getCardData } from '../../utils';
import { IColumn } from '../../interface';
import { Action } from '../actions/cardActions';
import { setCardData } from '../../utils';

const storageColumnsKey = "Trello_Clone_Columns"; // for Local Storage

export interface ColumnState {
	columns?: IColumn[];
}

const initialState = { columns: [] };

export default function (state: ColumnState = initialState, action: Action): ColumnState {
	const { type, payload } = action as Action & { payload: IColumn };

	switch (type) {
		case ADD_COLUMN: {
			const newState:ColumnState = { ...state, columns: [...state.columns!, payload] };
			setCardData(newState, storageColumnsKey);
			return newState;
		}
		default:
			return state;
	}
}
