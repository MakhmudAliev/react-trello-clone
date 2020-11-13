import React, { useState } from 'react';
import { ICard } from '../../interface';
import { Action } from '../../redux/actions/cardActions';

interface AddNewCardProps {
	onAddCard: (newTask: ICard) => Action;
	listId: number;
}

export const AddNewCard: React.FC<AddNewCardProps> = ({ onAddCard, listId }) => {
	const [addFormVisible, setAddFormVisible] = useState<boolean>(false);
	const [newTask, setNewTask] = useState<ICard>({ id: 0, listId: 0, title: '' });

	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewTask({ id: Date.now(), title: event.target.value, listId: listId });
	};

	const handleButtonClick = () => {
		onAddCard(newTask);
		setNewTask({ id: 0, listId: 0, title: '' });
	};

	return (
		<>
			{!addFormVisible ? (
				<div className="column-add-card">
					<button className="btn add-card-btn" onClick={() => setAddFormVisible(true)}>
						<i className="fas fa-plus"></i> Add new card
					</button>
				</div>
			) : (
				<></>
			)}

			{addFormVisible && (
				<div className="column-add-form">
					<textarea
						className="add-card-textarea"
						placeholder="Enter the task"
						value={newTask.title}
						onChange={handleInputChange}
					/>
					<button className="btn add-btn-green" onClick={handleButtonClick}>
						Add card
					</button>
					<span className="icon-close">
						<i className="fas fa-times" onClick={() => setAddFormVisible(false)}></i>
					</span>
				</div>
			)}
		</>
	);
};

export default AddNewCard;