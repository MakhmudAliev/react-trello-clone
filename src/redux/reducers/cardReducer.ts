import { ADD_CARD, EDIT_CARD, storageCardsKey } from '../constants';
import { getCardData, setCardData } from '../../utils';
import { ICard } from '../../interface';
import { Action } from '../actions/cardActions';


export interface CardsState {
	cards?: ICard[];
}

const initialState:CardsState = getCardData(storageCardsKey);


export default function (state: CardsState = initialState, action: Action): CardsState {

	const { type, payload } = action as Action & { payload: ICard };

	switch (type) {
		case ADD_CARD: {
			const newState:CardsState = { ...state, cards: [...state.cards!, payload] };
			setCardData(newState, storageCardsKey);
			return newState;
		}
		case EDIT_CARD: {
			const newState:CardsState = { ...state, cards: [...state.cards!, payload] };
			console.log(newState);
			setCardData(newState, storageCardsKey);
			return newState; 
		}
		default:
			return state;
	}
}
