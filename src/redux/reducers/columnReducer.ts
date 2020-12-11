import { ADD_COLUMN, storageColumnsKey } from "../constants";
import { IColumn } from "../../../interface";
import { Action } from "../actions/cardActions";
import { setCardData } from "../../utils";

export interface ColumnState {
  columns: IColumn[];
}

const initialState = { columns: [] };

export default function (state: ColumnState = initialState, action: Action): ColumnState {
  const { type, payload } = action as Action & { payload: IColumn };

  switch (type) {
    case ADD_COLUMN: {
      const newState: ColumnState = {
        ...state,
        columns: [...state.columns, payload],
      };
      setCardData(newState, storageColumnsKey);
      return newState;
    }

    default:
      return state;
  }
}
