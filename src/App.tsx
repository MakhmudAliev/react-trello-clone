import React from 'react';
import { Column } from './components/Column';

const App: React.FC = () => {
	return (
		<div className="fullpage">
			<header className="header">
				<span className="logo">Trello Clone</span>
			</header>
			<div className="container">
				<h1 className="board-name">Personal ToDo List</h1>
				<div className="row">
					<Column />
				</div>
			</div>
		</div>
	);
};

export default App;
