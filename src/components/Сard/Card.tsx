import React, { useState } from "react";
import { ICard } from "../../../interface";
import EditCard from "../EditCard";
import { Action } from "../../redux/actions/cardActions";

interface CardProps {
  card: ICard;
  index: number;
  editCard: (editedCard: ICard) => Action;
  removeCard: (cardToRemove: ICard) => Action;
}

const Card: React.FC<CardProps> = ({ card, index, editCard, removeCard }) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const showCard = () => {
    setEditMode(false);
  };

  return (
    <>
      {!editMode ? (
        <div className="card">
          <div className="card-priority">
            <div className="priority-orange"></div>
            <div className="priority-green"></div>
          </div>
          <div className="card-title">{card.title} - {index}</div>
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
      ) : (
        <EditCard card={card} showCard={showCard} editCard={editCard} removeCard={removeCard} />
      )}
    </>
  );
};

export default Card;
