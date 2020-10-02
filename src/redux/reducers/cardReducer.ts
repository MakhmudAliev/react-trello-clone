import { ADD_CARD } from '../constants';
import { getCardData } from '../../utils';
import { ICard } from '../../interface';
import { Action } from '../actions/cardActions';

export interface CardsState {
	cards: ICard[];
}

const initialState = getCardData() || { cards: [] };

export default function (state: CardsState = initialState, action: Action): CardsState {
	const { type, payload } = action as Action & { payload: ICard };

	switch (type) {
		case ADD_CARD: {
			return { ...state, cards: [...state.cards, payload] };
		}
		default:
			return state;
	}
}
