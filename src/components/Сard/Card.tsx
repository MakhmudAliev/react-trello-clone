import React, { useState } from "react"
import { ICard } from "../../../interface"
import EditCard from "../EditCard";
import { Action, editCard } from "../../redux/actions/cardActions"
import { AppState } from "../../redux/store"
import { AnyAction, Dispatch } from "redux"


interface CardProps {
  card: ICard,
  editCard: (editedCard: ICard) => Action
  removeCard: (cardToRemove: ICard) => Action
}

const Card: React.FC<CardProps> = ({ card, editCard, removeCard }) => {
  
  const [editMode, setEditMode] = useState<boolean>(false);

  const showCard = () => {
    setEditMode(false);
  }

  return (
    <>
      {!editMode ? 
        <div className="card">
          <div className="card-priority">
            <div className="priority-orange"></div>
            <div className="priority-green"></div>
          </div>
          <div className="card-title">{card.title}</div>
          <div className="card-info">
            <div className="card-info__due-date due-date-red">
              <i className="far fa-clock"></i> 4 nov 2020
            </div>
            <div className="card-info__checklist">
              <i className="far fa-check-square"></i>2/5
            </div>
          </div>
          <i className="fas fa-edit" onClick={() => setEditMode(true)}></i>
        </div>
      :
        <EditCard card={card} showCard={showCard} editCard={editCard} removeCard={removeCard} />
      }
    </>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    cards: state.CardState!.cards,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    editCard: (newCard: ICard) => dispatch(editCard(newCard)) as AnyAction,
  }
}

export default Card