import {combineReducers} from 'redux';
import {createReducers} from './createReducers';
import counter from './counter';
import services from './services';
import teamMembers from './team-members';

const reducers = {
  counter,
  services,
  teamMembers
};

const rootReducer = combineReducers({...createReducers(reducers)});

export default rootReducer;
