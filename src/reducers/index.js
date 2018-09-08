import {combineReducers} from 'redux';
import {createReducers} from './createReducers';
import counter from './counter';
import services from './services';

const reducers = {
  counter,
  services
};

const rootReducer = combineReducers({...createReducers(reducers)});

export default rootReducer;
