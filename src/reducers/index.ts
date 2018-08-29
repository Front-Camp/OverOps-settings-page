import {combineReducers} from 'redux';
import {createReducers} from './createReducers';
import counter from './counter';
import itemsList from './itemsList';

const reducers = {
  counter,
  itemsList
};

const rootReducer = combineReducers({...createReducers(reducers)});

export default rootReducer;
