import React, { useState } from 'react';
import { ICard } from '../interface';
import { Action } from '../redux/actions/cardActions';

interface AddNewCardProps {
	onAddCard: (newTask: ICard) => Action;
}

export const AddNewCard: React.FC<AddNewCardProps> = ({ onAddCard }) => {
	const [addFormVisible, setAddFormVisible] = useState<boolean>(false);
	const [newTask, setNewTask] = useState<ICard>({ title: '' });

	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewTask({ title: event.target.value });
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
				<div className="column-add-form">
					<textarea
						className="add-card-textarea"
						placeholder="Enter the task"
						value={newTask.title}
						onChange={handleInputChange}
					/>
					<button className="btn add-btn-green" onClick={() => onAddCard(newTask)}>
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
