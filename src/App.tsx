import React from 'react';
import Column from './components/Column';
import { AppState } from './redux/store';
import { connect } from 'react-redux';
import { IColumn } from './interface';
import { AnyAction, Dispatch } from 'redux';
import { Action, addColumn } from './redux/actions/cardActions';
import AddNewColumn from './components/AddNewColumn/AddNewColumn';

interface Props {
	columns?: IColumn[];
	addColumn?: (newColumn: IColumn) => Action;
}

const App: React.FC<Props> = ({ columns = [], addColumn }): JSX.Element => {
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

					<AddNewColumn onAddColumn={addColumn!} />
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state: AppState): Props => {
	return {
		columns: state.ColumnState!.columns
	};
};

const mapDispatchToProps = (dispatch: Dispatch): {addColumn: (newColumn: IColumn) => void} => {
	return {
		addColumn: (newColumn: IColumn) => dispatch(addColumn(newColumn)) as AnyAction
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App as any);
