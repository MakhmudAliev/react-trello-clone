import { ADD_CARD } from '../constants';
import { getCardData, setCardData } from '../../utils';
import { ICard } from '../../interface';
import { Action } from '../actions/cardActions';

const storageCardsKey = "Trello_Clone_Cards"; // for local Storage

export interface CardsState {
	cards?: ICard[];
}

const initialState:CardsState = getCardData(storageCardsKey);
// const initialState:CardsState = { cards: [] };

export default function (state: CardsState = initialState, action: Action): CardsState {

	console.log("LS State", state);

	const { type, payload } = action as Action & { payload: ICard };

	switch (type) {
		case ADD_CARD: {
			const newState:CardsState = { ...state, cards: [...state.cards!, payload] };
			setCardData(newState, storageCardsKey);
			return newState;
		}
		default:
			return state;
	}
}
