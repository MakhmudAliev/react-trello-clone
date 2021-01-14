import {
  ADD_COLUMN,
  FETCH_COLUMNS_FAILURE,
  FETCH_COLUMNS_REQUEST,
  FETCH_COLUMNS_SUCCESS,
  REMOVE_COLUMN,
  storageColumnsKey,
} from "../constants";
import { IColumn } from "../../../interface";
import { Action } from "../actions/cardActions";
import { setCardData } from "../../utils";

export interface ColumnState {
  columns: IColumn[];
  loading?: Boolean;
  error?: string;
}

// const initialState = getColumns();
const initialState = { columns: [], loading: false };

export default function (state: ColumnState = initialState, action: Action): ColumnState {
  const { type, payload } = action as Action & { payload: IColumn & IColumn[] };

  switch (type) {
    case FETCH_COLUMNS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_COLUMNS_SUCCESS: {
      console.log("cols", payload);
      return {
        loading: false,
        error: "",
        columns: [...payload],
      };
    }
    case FETCH_COLUMNS_FAILURE: {
      return {
        loading: false,
        // error: payload,
        columns: [],
      };
    }
    case ADD_COLUMN: {
      const newState: ColumnState = {
        ...state,
        columns: [...state.columns, payload],
      };
      // setCardData(newState, storageColumnsKey);
      return newState;
    }

    case REMOVE_COLUMN: {
      const newState: ColumnState = {
        columns: state.columns.filter(item => item._id !== payload),
      };
      setCardData(newState, storageColumnsKey);
      return newState;
    }

    default:
      return state;
  }
}
