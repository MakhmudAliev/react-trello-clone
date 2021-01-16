import React, { useState } from "react";
import { ICard } from "../../../interface";
import { Action } from "../../redux/actions/cardActions";

type EditCardProps = {
  card: ICard;
  showCard: () => void;
  editCard: (editedCard: ICard) => Action;
  removeCardDB: (cardToRemove: ICard) => void;
};

export const EditCard: React.FC<EditCardProps> = ({ card, showCard, editCard, removeCardDB }) => {
  const [editedCard, setEditedCard] = useState(card.title);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedCard(event.target.value);
  };

  const handleSave = () => {
    editCard({ ...card, title: editedCard });
    showCard();
  };

  const handleRemove = () => {
    removeCardDB({ ...card });
    showCard();
  };

  return (
    <div className="card-edit">
      <textarea
        className="add-card-textarea"
        placeholder="Enter new task name"
        value={editedCard}
        onChange={handleInputChange}
      />
      <div className="edit-controls">
        <button className="btn add-btn-green" onClick={handleSave}>
          Save
        </button>
        <a href="#" onClick={handleRemove}>
          Remove Card
        </a>
      </div>
    </div>
  );
};

export default EditCard;
