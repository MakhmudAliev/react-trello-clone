import { ADD_CARD, ADD_COLUMN, EDIT_CARD, REMOVE_CARD, REORDER_COLUMN } from "../constants";
import { ICard, IColumn } from "../../../interface";
import { AnyAction } from "redux";

export type Action = {
  type: string;
  payload: ICard | ICard[] | IColumn | IColumn[];
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

export const reorderColumn = (list: ICard[]): Action & AnyAction => {
  return {
    type: REORDER_COLUMN,
    payload: list,
  };
};
