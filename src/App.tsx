import React, { useState } from "react";
import Column from "./components/Column";
import { AppState } from "./redux/store";
import { connect } from "react-redux";
import { ICard, IColumn } from "../interface";
import { AnyAction, Dispatch } from "redux";
import { Action, addColumn, reorderColumn } from "./redux/actions/cardActions";
import AddNewColumn from "./components/AddNewColumn/AddNewColumn";
import { DragDropContext, Droppable, DraggableLocation, DropResult } from "react-beautiful-dnd";

interface Props {
  columns?: IColumn[];
  cards?: ICard[];
  addColumn?: (newColumn: IColumn) => Action;
  reorderColumn?: (newList: ICard[]) => Action;
}

interface IMoveResult {
  droppable: IColumn[];
  droppable2: IColumn[];
}

const App: React.FC<Props> = ({ columns = [], cards = [], addColumn, reorderColumn }): JSX.Element => {
  const initialState: any = columns.map(column => {
    return cards.filter(card => card.listId === column.id);
  });

  const [state, setState] = useState<any>(initialState);

  console.log("initialState", state);

  // reorder draggable elements ====================================================

  const reorder = (list: ICard[], startIndex: number, endIndex: number): ICard[] => {
    console.log("entering reorder func", list, startIndex, endIndex);
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    console.log("result of reorder", result);
    return result;
  };

  // Move draggable elements ========================================================

  const move = (
    source: ICard[],
    destination: ICard[],
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation
  ): IMoveResult | any => {

    const sourceClone = [...source];
    const destClone = [...destination];
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    removed.listId = destClone[0].listId;
    destClone.splice(droppableDestination.index, 0, removed);

    let result: any = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
  };

  // Handle drag  ===================================================================
  const onDragEnd = (reorderColumn: (newList: ICard[]) => Action) => (result: DropResult) => {
    const { source, destination } = result;

    console.log("source, destination", source, destination);

    if (!destination) {
      return;
    }

    const sInd = +source.droppableId; // Source Column Index
    const dInd = +destination.droppableId; // Destination Column Index

    console.log("sInd, dInd", sInd, dInd);

    if (sInd === dInd) {
      // We drop item in the same Column
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      console.log("newState to update", newState[sInd]);
      setState(newState);

      const stateToRedux = newState.flatMap(item => item);

      reorderColumn(stateToRedux);

    } else {
      // We drop item in different Column
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];
      setState(newState.filter(group => group.length));
      const stateToRedux = newState.flatMap(item => item);
      reorderColumn(stateToRedux);
    }
  };
  // =================================================================================
  return (
    <div className="fullpage">
      <div className="overlay">
        <header className="header">
          <span className="logo">Trello Clone</span>
        </header>
        <div className="container">
          <h1 className="board-name">Personal ToDo List</h1>
          <div className="row">
            <DragDropContext onDragEnd={onDragEnd(reorderColumn!)}>
              {columns.map((column: any, index: any) => (
                <Droppable droppableId={`${index}`} key={index}>
                  {provided => (
                    <div className="drag-columns" {...provided.droppableProps} ref={provided.innerRef}>
                      <Column {...column} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
              <AddNewColumn onAddColumn={addColumn!} />
            </DragDropContext>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState): Props => {
  return {
    columns: state.ColumnState!.columns,
    cards: state.CardState!.cards,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): { addColumn: (newColumn: IColumn) => void; reorderColumn: (newList: ICard[]) => void } => {
  return {
    addColumn: (newColumn: IColumn) => dispatch(addColumn(newColumn)) as AnyAction,
    reorderColumn: (newList: ICard[]) => dispatch(reorderColumn(newList)) as AnyAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App as any);
