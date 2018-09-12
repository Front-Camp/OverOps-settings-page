import {combineReducers} from 'redux';
import {createReducers} from './createReducers';
import services from './services';
import loader from './loader';
import teamMembers from './team-members';

const reducers = {
  services,
  teamMembers,
  loader
};

const rootReducer = combineReducers({...createReducers(reducers)});

export default rootReducer;
