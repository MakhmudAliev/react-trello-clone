import React, { useState, useMemo } from "react";
import AddNewCard from "../AddNewCard";
import { connect } from "react-redux";
import { ICard } from "../../../interface";
import { AnyAction, Dispatch } from "redux";
import { Action, addCardDB, editCard, removeCard, removeColumn, removeCards } from "../../redux/actions/cardActions";
import { AppState } from "../../redux/store";
import Card from "../Сard";
import { Draggable } from "react-beautiful-dnd";
import ColumnDropdown from "./ColumnDropdown";
import { ThunkDispatch } from "redux-thunk";

interface ColumnProps {
  cards?: ICard[];
  title?: string;
  _id?: string;
  addCardDB?: (newCard: ICard) => void;
  editCard: (editedCard: ICard) => Action;
  removeCard: (cartToRemove: ICard) => Action;
  removeColumn: (columnToRemove: string) => Action;
  removeCards: (listId: string) => Action;
}

export const Column: React.FC<ColumnProps> = ({
  cards = [],
  addCardDB,
  title,
  _id,
  editCard: onEdit,
  removeCard: onRemove,
  removeColumn: onRemoveColumn,
  removeCards: onRemoveCards,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const columnCards = useMemo(
    () => cards.filter(card => card.listId === _id),
    [cards] // eslint-disable-line react-hooks/exhaustive-deps
  );

  // console.log("columnCards", cards);

  return (
    <>
      <div className="column">
        <div className="column-header">
          <div>{title}</div>
          <div className="column-header__dots" onClick={toggleDropdown}>
            <i className="fas fa-ellipsis-h"></i>
            <ColumnDropdown
              columnId={_id!}
              isVisible={dropdownVisible}
              removeCards={onRemoveCards}
              removeColumn={onRemoveColumn}
            />
          </div>
        </div>
        <div className="column-body">
          {columnCards!.map((card, index) => (
            <Draggable key={card._id} draggableId={`${card._id}`} index={index}>
              {provided => (
                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                  <Card card={card} editCard={onEdit} removeCard={onRemove} index={index} />
                </div>
              )}
            </Draggable>
          ))}
        </div>

        <AddNewCard onAddCard={addCardDB!} listId={_id!} />
      </div>
    </>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    cards: state.CardState!.cards,
  };
};

const mapDispatchToProps = (dispatch: Dispatch & ThunkDispatch<any, any, any>) => {
  return {
    // addCard: (newCard: ICard) => dispatch(addCard(newCard)) as AnyAction,
    editCard: (newCard: ICard) => dispatch(editCard(newCard)) as AnyAction,
    removeCard: (newCard: ICard) => dispatch(removeCard(newCard)) as AnyAction,
    removeColumn: (columnToRemove: string) => dispatch(removeColumn(columnToRemove)) as AnyAction,
    removeCards: (listId: string) => dispatch(removeCards(listId)) as AnyAction,
    addCardDB: (newCard: ICard) => dispatch(addCardDB(newCard)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Column as any);
