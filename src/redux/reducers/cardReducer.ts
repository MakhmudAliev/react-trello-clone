import { ADD_CARD } from '../constants';
import { getCardData } from '../../utils';
import { ICard } from '../../interface';
import { Action } from '../actions/cardActions';
import { AppState } from '../store';


export interface CardsState {
	cards?: ICard[];
}

// const initialState = getCardData() || { cards: [] };
const initialState:CardsState = { cards: [] };

export default function (state: CardsState = initialState, action: Action): CardsState {

	console.log("state-cards", state);

	const { type, payload } = action as Action & { payload: ICard };

	switch (type) {
		case ADD_CARD: {
			return { ...state, cards: [...state.cards!, payload] };
		}
		default:
			return state;
	}
}
