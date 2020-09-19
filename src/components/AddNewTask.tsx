import React, { useState } from 'react';
import { ICard } from '../interface';

interface AddNewTaskProps {
	onAddCard(title: ICard): Object;
}

export const AddNewTask: React.FC<AddNewTaskProps> = ({ onAddCard }) => {
	const [addFormVisible, setAddFormVisible] = useState<boolean>(false);
	const [newTask, setNewTask] = useState<string>('');

	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewTask(event.target.value);
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
						value={newTask}
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

export default AddNewTask;
