import React, { useState, useMemo } from "react";
import AddNewCard from "../AddNewCard";
import { connect } from "react-redux";
import { ICard, IColumn } from "../../../interface";
import { AnyAction, Dispatch } from "redux";
import { Action, addCard, editCard, removeCard, removeColumn } from "../../redux/actions/cardActions";
import { AppState } from "../../redux/store";
import Card from "../Сard";
import { Draggable } from "react-beautiful-dnd";
import ColumnDropdown from "./ColumnDropdown";

interface ColumnProps {
  cards?: ICard[];
  title?: string;
  id?: string;
  addCard?: (newCard: ICard) => Action;
  editCard: (editedCard: ICard) => Action;
  removeCard: (cartToRemove: ICard) => Action;
  removeColumn: (columnToRemove: string) => Action;
}

export const Column: React.FC<ColumnProps> = ({
  cards = [],
  addCard,
  title,
  id,
  editCard: onEdit,
  removeCard: onRemove,
  removeColumn: onRemoveColumn,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownVisible(prevState => !prevState);
  };

  const columnCards = useMemo(
    () => cards.filter(card => card.listId === id),
    [cards] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <>
      <div className="column">
        <div className="column-header">
          <div>{title}</div>
          <div className="column-header__dots" onClick={toggleDropdown}>
            <i className="fas fa-ellipsis-h"></i>
            <ColumnDropdown columnId={id!} isVisible={dropdownVisible} removeColumn={onRemoveColumn} />
          </div>
        </div>
        <div className="column-body">
          {columnCards!.map((card, index) => (
            <Draggable key={card.id} draggableId={`${card.id}`} index={index}>
              {provided => (
                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                  <Card card={card} editCard={onEdit} removeCard={onRemove} index={index} />
                </div>
              )}
            </Draggable>
          ))}
        </div>

        <AddNewCard onAddCard={addCard!} listId={id!} />
      </div>
    </>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    cards: state.CardState!.cards,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addCard: (newCard: ICard) => dispatch(addCard(newCard)) as AnyAction,
    editCard: (newCard: ICard) => dispatch(editCard(newCard)) as AnyAction,
    removeCard: (newCard: ICard) => dispatch(removeCard(newCard)) as AnyAction,
    removeColumn: (columnToRemove: string) => dispatch(removeColumn(columnToRemove)) as AnyAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Column as any);
