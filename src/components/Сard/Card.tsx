import React, { useState } from "react"
import { ICard } from "../../interface"
import EditCard from "../EditCard";
import { connect } from "react-redux"
import { Action, editCard } from "../../redux/actions/cardActions"
import { AppState } from "../../redux/store"
import { AnyAction, Dispatch } from "redux"




interface CardProps {
  card: ICard
}


const Card: React.FC<CardProps> = ({ card }) => {
  
  const [editCard, setEditCard] = useState<boolean>(false);

  const showCard = () => {
    setEditCard(false);
  }

  return (
    <>
      {!editCard ? 
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
          <i className="fas fa-edit" onClick={() => setEditCard(true)}></i>
        </div>
      :
        <EditCard card={card} showCard={showCard}  />
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

// export default connect(mapStateToProps, mapDispatchToProps)(Card as any)
export default Card