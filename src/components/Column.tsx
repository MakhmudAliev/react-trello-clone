import React, { useMemo } from "react"
// import { Card } from './Card';
import AddNewCard from "./AddNewCard"
import { connect } from "react-redux"
import { ICard } from "../interface"
import { AnyAction, Dispatch } from "redux"

import { Action, addCard } from "../redux/actions/cardActions"
import { AppState } from "../redux/store"
import Card from "./Card"

interface ColumnProps {
  cards?: ICard[]
  addCard?: (newCard: ICard) => Action
  title?: string
  id?: number
}

export const Column: React.FC<ColumnProps> = ({
  cards = [],
  addCard,
  title,
  id,
}) => {
  const columnCards = useMemo(
    () => cards.filter((card) => card.listId === id),
    [cards] // eslint-disable-line react-hooks/exhaustive-deps
  )

  return (
    <>
      <div className="column">
        <div className="column-header">{title}</div>
        <div className="column-body">
          {columnCards!.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>

        <AddNewCard onAddCard={addCard!} listId={id!} />
      </div>
    </>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    cards: state.CardState.cards,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addCard: (newCard: ICard) => dispatch(addCard(newCard)) as AnyAction,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Column as any)
