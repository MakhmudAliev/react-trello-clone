import {
  ADD_CARD,
  ADD_COLUMN,
  EDIT_CARD,
  REMOVE_CARD,
  REMOVE_COLUMN,
  REMOVE_CARDS,
  REORDER_COLUMN,
} from "../constants";
import { ICard, IColumn } from "../../../interface";
import { AnyAction } from "redux";

export type Action = {
  type: string;
  payload: ICard | ICard[] | IColumn | IColumn[] | string;
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
