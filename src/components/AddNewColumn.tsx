import React, { useState } from 'react';
import { IColumn } from '../interface';
import { Action } from '../redux/actions/cardActions';

interface AddNewColumnProps {
	onAddColumn: (newColumn: IColumn) => Action;
}

export const AddNewColumn: React.FC<AddNewColumnProps> = ({ onAddColumn }) => {
	const [addFormVisible, setAddFormVisible] = useState<boolean>(false);
	const [newColumn, setNewColumn] = useState<IColumn>({ title: '' });

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewColumn({ title: event.target.value, id: Date.now() });
	};

	const handleButtonClick = () => {
		onAddColumn(newColumn);
		setNewColumn({ title: '' });
	};

	return (
		<div className="column">
			{!addFormVisible ? (
				<button className="btn add-list-btn" onClick={() => setAddFormVisible(true)}>
					<i className="fas fa-plus"></i> Add new list
				</button>
			) : (
				<div className="add-new-column">
					<input
						className="add-column-input"
						placeholder="Enter new list name"
						value={newColumn.title}
						onChange={handleInputChange}
					/>
					<button className="btn add-btn-green" onClick={handleButtonClick}>
						Add new list
					</button>
					<span className="icon-close">
						<i className="fas fa-times" onClick={() => setAddFormVisible(false)}></i>
					</span>
				</div>
			)}
		</div>
	);
};

export default AddNewColumn;
