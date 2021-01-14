import {
  ADD_CARD,
  EDIT_CARD,
  REMOVE_CARD,
  REMOVE_CARDS,
  REORDER_COLUMN,
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_FAILURE,
  FETCH_CARDS_SUCCESS,
  storageCardsKey,
} from "../constants";
import { getCardData, setCardData } from "../../utils";
import { ICard } from "../../../interface";
import { Action } from "../actions/cardActions";

export interface CardsState {
  cards: ICard[];
  loading?: Boolean;
  error?: String;
}

// const initialState: CardsState = getCardData(storageCardsKey) as CardsState;
const initialState = { cards: [], loading: false };

export default function (state: CardsState = initialState, action: Action): CardsState {
  const { type, payload } = action as Action & { payload: ICard & ICard[] };

  switch (type) {
    case FETCH_CARDS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_CARDS_SUCCESS: {
      return {
        loading: false,
        error: "",
        cards: [...payload],
      };
    }
    case FETCH_CARDS_FAILURE: {
      return {
        loading: false,
        // error: payload,
        cards: [],
      };
    }

    case ADD_CARD: {
      const newState: CardsState = {
        ...state,
        cards: [...state.cards, payload],
      };
      // setCardData(newState, storageCardsKey);
      return newState;
    }
    case EDIT_CARD: {
      const newState: CardsState = {
        cards: state.cards.map(item => (item._id === payload._id ? payload : item)),
      };
      setCardData(newState, storageCardsKey);
      return newState;
    }
    case REMOVE_CARD: {
      const newState: CardsState = {
        cards: state.cards.filter(item => item._id !== payload._id),
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
