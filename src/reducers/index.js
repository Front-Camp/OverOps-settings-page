import {combineReducers} from 'redux';
import {createReducers} from './createReducers';
import counter from './counter';

const reducers = {
  counter
};

const rootReducer = combineReducers({...createReducers(reducers)});

export default rootReducer;
