import React, {useState} from 'react'
import { ICard } from '../../interface';
import { Action, editCard } from "../../redux/actions/cardActions"


type EditCardProps = {
  card: ICard,
  showCard: () => void,
 // onEditCard: (editedCard: ICard) => Action;
}

export const EditCard: React.FC<EditCardProps> = ( {card, showCard} ) => {

  const [editedCard, setEditedCard] = useState(card.title);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedCard(event.target.value);    
  }

  const handleClick = () => {
    //onEditCard({...card, title: editedCard});
    showCard();
  }

  return (
    <div className="card-edit">
      <textarea
				className="add-card-textarea"
        placeholder="Enter new task name"
        value={editedCard}
        onChange={handleInputChange}
			/>
      	<button className="btn add-btn-green" onClick={handleClick}>
						Save
				</button>
      
    </div>
  )
}



export default EditCard;