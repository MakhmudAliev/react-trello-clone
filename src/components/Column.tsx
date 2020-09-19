import React, { useState } from 'react';
import { Card } from './Card';
// import { IList } from '../interface';
import AddNewTask from './AddNewTask';
import { connect } from 'react-redux';
import { ICard } from '../interface';

import { addCard } from '../redux/actions/cardActions';

interface ColumnProps {
	cards?: ICard[];
	addCard?: (newTask: ICard) => Object;
}

export const Column: React.FC<ColumnProps> = ({ cards, addCard }) => {
	// const onAddCard = (title: string) => {
	// 	console.log(title);
	// };

	return (
		<>
			<div className="column">
				<div className="column-header">Backlog</div>
				<div className="column-body">
					{cards.map(card => (
						<Card card={card} key={card.id} />
					))}
					{/* <Card /> */}
				</div>

				<AddNewTask onAddCard={addCard} />
			</div>

			<div className="column">
				<button className="btn add-list-btn">
					<i className="fas fa-plus"></i> Add new list
				</button>
			</div>
		</>
	);
};

const mapStateToProps = (state: ICard[]) => {
	return {
		cards: state.cards
	};
};

const mapDispatchToProps = { addCard };

export default connect(mapStateToProps, mapDispatchToProps)(Column);
