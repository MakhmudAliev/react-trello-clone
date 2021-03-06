import { createStore, applyMiddleware } from "redux";
import { getCardData } from "../utils";
import rootReducer from "./reducers";
import { CardsState } from "./reducers/cardReducer";
import { ColumnState } from "./reducers/columnReducer";
import thunk from "redux-thunk";
import { storageCardsKey, storageColumnsKey } from "./constants";

export interface AppState {
  CardState: CardsState;
  ColumnState: ColumnState;
}

const initialState: AppState = {
  CardState: getCardData(storageCardsKey) as CardsState,
  ColumnState: getCardData(storageColumnsKey) as ColumnState,
};

export const store = createStore(
  rootReducer,
  initialState as AppState,
  applyMiddleware(thunk)
  // (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
