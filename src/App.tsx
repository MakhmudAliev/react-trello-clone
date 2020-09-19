import React from 'react';
import { Column } from './components/Column';
import { AppState } from './redux/store';
import { connect } from 'react-redux';
import { IColumn } from './interface';
import { AnyAction, Dispatch } from 'redux';
import { addColumn } from './redux/actions/cardActions';

interface Props {
	columns: IColumn[];
}

const App: React.FC<Props> = ({ columns }) => {
	return (
		<div className="fullpage">
			<header className="header">
				<span className="logo">Trello Clone</span>
			</header>
			<div className="container">
				<h1 className="board-name">Personal ToDo List</h1>
				<div className="row">
					{columns.map((column, index) => (
						<Column {...column} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state: AppState) => {
	return {
		columns: state.ColumnState.columns
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		addColumn: (newColumn:IColumn) => dispatch(addColumn(newColumn)) as AnyAction
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
