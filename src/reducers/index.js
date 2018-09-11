import {combineReducers} from 'redux';
import {createReducers} from './createReducers';
import services from './services';
import teamMembers from './team-members';

const reducers = {
  services,
  teamMembers
};

const rootReducer = combineReducers({...createReducers(reducers)});

export default rootReducer;
