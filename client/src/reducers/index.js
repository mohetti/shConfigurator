import selectionStateReducer from './selectionState';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectionState: selectionStateReducer,
});

export default rootReducer;
