import selectionStateReducer from './selectionState';
import backendResponseReducer from './backendResponse';
import detailedSystemReducer from './detailedSystem';
import helpersReducer from './helpersReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectionState: selectionStateReducer,
  backendResponse: backendResponseReducer,
  detailedSystem: detailedSystemReducer,
  helpers: helpersReducer,
});

export default rootReducer;
