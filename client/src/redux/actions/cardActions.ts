import {
  ADD_CARD,
  ADD_COLUMN,
  EDIT_CARD,
  REMOVE_CARD,
  REMOVE_COLUMN,
  REMOVE_CARDS,
  REORDER_COLUMN,
  FETCH_COLUMNS_REQUEST,
  FETCH_COLUMNS_SUCCESS,
  FETCH_COLUMNS_FAILURE,
} from "../constants";
import { ICard, IColumn } from "../../../interface";
import { AnyAction } from "redux";
import axios from "axios";

export type Action = {
  type: string;
  payload: ICard | ICard[] | IColumn | IColumn[] | string;
};

export const fetchColumnsRequest = (): Action & AnyAction => {
  return {
    type: FETCH_COLUMNS_REQUEST,
    payload: [],
  };
};

export const fetchColumnsSuccess = (columns: IColumn[]): Action & AnyAction => {
  return {
    type: FETCH_COLUMNS_SUCCESS,
    payload: columns,
  };
};

export const fetchColumnsFailure = (error: string): Action & AnyAction => {
  return {
    type: FETCH_COLUMNS_FAILURE,
    payload: error,
  };
};

export const fetchColumns = () => {
  return (dispatch: any) => {
    dispatch(fetchColumnsRequest());
    axios
      .get("/api/v1/columns")
      .then(response => {
        const columns = response.data.data;
        dispatch(fetchColumnsSuccess(columns));
      })
      .catch(error => {
        const errMessage = error.message;
        dispatch(fetchColumnsFailure(errMessage));
      });
  };
};

export const addColumnDB = (newColumn: IColumn) => {
  return (dispatch: any) => {
    // db add
    axios
      .post("/api/v1/columns", newColumn)
      .then(response => {
        dispatch(addColumn(response.data.data));
      })
      .catch(error => {
        const errMessage = error.message;
        dispatch(fetchColumnsFailure(errMessage));
      });
  };
};

export const addCard = (newCard: ICard): Action & AnyAction => {
  return {
    type: ADD_CARD,
    payload: newCard,
  };
};

export const addColumn = (newColumn: IColumn): Action & AnyAction => {
  return {
    type: ADD_COLUMN,
    payload: newColumn,
  };
};

export const editCard = (editedCard: ICard): Action & AnyAction => {
  return {
    type: EDIT_CARD,
    payload: editedCard,
  };
};

export const removeCard = (cardToRemove: ICard): Action & AnyAction => {
  return {
    type: REMOVE_CARD,
    payload: cardToRemove,
  };
};

export const removeColumn = (columnId: string): Action & AnyAction => {
  return {
    type: REMOVE_COLUMN,
    payload: columnId,
  };
};

export const removeCards = (listId: string): Action & AnyAction => {
  return {
    type: REMOVE_CARDS,
    payload: listId,
  };
};

export const reorderColumn = (list: ICard[]): Action & AnyAction => {
  return {
    type: REORDER_COLUMN,
    payload: list,
  };
};
