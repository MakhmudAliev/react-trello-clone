import React, { useState, useMemo } from "react";
import AddNewCard from "../AddNewCard";
import { connect } from "react-redux";
import { ICard } from "../../../interface";
import { AnyAction, Dispatch } from "redux";
import {
  Action,
  addCardDB,
  editCard,
  removeCardDB,
  removeColumn,
  removeCards,
} from "../../redux/actions/cardActions";
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
  removeCardDB?: (cardToRemove: ICard) => void;
  removeColumn: (columnToRemove: string) => Action;
  removeCards: (listId: string) => Action;
}

export const Column: React.FC<ColumnProps> = ({
  cards = [],
  addCardDB,
  removeCardDB: onRemove,
  title,
  _id,
  editCard: onEdit,
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
                  <Card card={card} editCard={onEdit} removeCardDB={onRemove!} index={index} />
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
    editCard: (newCard: ICard) => dispatch(editCard(newCard)) as AnyAction,
    removeColumn: (columnToRemove: string) => dispatch(removeColumn(columnToRemove)) as AnyAction,
    removeCards: (listId: string) => dispatch(removeCards(listId)) as AnyAction,
    addCardDB: (newCard: ICard) => dispatch(addCardDB(newCard)),
    removeCardDB: (cardToRemove: ICard) => dispatch(removeCardDB(cardToRemove)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Column as any);
