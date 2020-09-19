import React from 'react';
import { ICard } from '../interface';

interface CardProps {
	card?: ICard;
}

export const Card: React.FC<CardProps> = (card: ICard) => {
	return (
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
		</div>
	);
};

export default Card;
