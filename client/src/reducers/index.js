import selectionStateReducer from './selectionState';
import backendResponseReducer from './backendResponse';
import detailedSystemReducer from './detailedSystem';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectionState: selectionStateReducer,
  backendResponse: backendResponseReducer,
  detailedSystem: detailedSystemReducer,
});

export default rootReducer;
