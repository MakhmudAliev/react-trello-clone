import React from 'react';
import { Card } from './Card';
import AddNewTask from './AddNewTask';
import { connect } from 'react-redux';
import { ICard } from '../interface';
import { AnyAction, Dispatch } from 'redux';

import { Action, addCard } from '../redux/actions/cardActions';
import { CardsState } from '../redux/reducers/cardReducer';

interface ColumnProps {
	cards?: ICard[];
	addCard?: (newCard: ICard) => Action;
}

export const Column: React.FC<ColumnProps> = ({ cards, addCard }) => {
	return (
		<>
			<div className="column">
				<div className="column-header">Backlog</div>
				<div className="column-body">
					{cards!.map(card => (
						<Card card={card} key={card.id} />
					))}
				</div>

				<AddNewTask onAddCard={addCard!} />
			</div>

			<div className="column">
				<button className="btn add-list-btn">
					<i className="fas fa-plus"></i> Add new list
				</button>
			</div>
		</>
	);
};

const mapStateToProps = (state: CardsState) => {
	return {
		cards: state.cards // {cards: []}
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		addCard: (newCard: ICard) => dispatch(addCard(newCard)) as AnyAction
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Column as any);
