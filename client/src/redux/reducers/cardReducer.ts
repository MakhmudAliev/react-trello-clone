import { ADD_CARD, EDIT_CARD, REMOVE_CARD, REMOVE_CARDS, REORDER_COLUMN, storageCardsKey } from "../constants";
import { getCardData, setCardData } from "../../utils";
import { ICard } from "../../../interface";
import { Action } from "../actions/cardActions";

export interface CardsState {
  cards: ICard[];
}

const initialState: CardsState = getCardData(storageCardsKey) as CardsState;

export default function (state: CardsState = initialState, action: Action): CardsState {
  const { type, payload } = action as Action & { payload: ICard };

  switch (type) {
    case ADD_CARD: {
      const newState: CardsState = {
        ...state,
        cards: [...state.cards, payload],
      };
      setCardData(newState, storageCardsKey);
      return newState;
    }
    case EDIT_CARD: {
      const newState: CardsState = {
        cards: state.cards.map(item => (item.id === payload.id ? payload : item)),
      };
      setCardData(newState, storageCardsKey);
      return newState;
    }
    case REMOVE_CARD: {
      const newState: CardsState = {
        cards: state.cards.filter(item => item.id !== payload.id),
      };
      setCardData(newState, storageCardsKey);
      return newState;
    }
    case REMOVE_CARDS: {
      const newState: CardsState = {
        cards: state.cards.filter(item => item.listId !== payload),
      };
      setCardData(newState, storageCardsKey);
      return newState;
    }
    case REORDER_COLUMN: {
      console.log("payload", payload);
      const newState: CardsState = {
        ...state,
        cards: payload as ICard[],
      };
      setCardData(newState, storageCardsKey);
      return newState;
    }

    default:
      return state;
  }
}

