import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import columnReducer from './columnReducer';

export default combineReducers({
	CardState: cardReducer,
	ColumnState: columnReducer
});
