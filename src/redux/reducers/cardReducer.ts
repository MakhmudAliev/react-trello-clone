import { ADD_CARD } from '../constants';
import { getCardData, setCardData } from '../../utils';
import { ICard } from '../../interface';
import { Action } from '../actions/cardActions';

export interface CardsState {
	cards: ICard[];
}

const initialState = getCardData() || { cards: [] };

export default function (state: CardsState = initialState, action: Action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_CARD: {
			return { ...state, cards: [...state.cards, payload] };
		}
		default:
			return state;
	}
}
