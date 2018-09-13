import {
  TOGGLE_SHOW_KEY_ID,
  FETCH_ALL_SERVICES_REQUEST,
  FETCH_ALL_SERVICES_SUCCESS,
  FETCH_ALL_SERVICES_FAILURE,
} from '../actions/services';

import {
  FETCH_CREATE_SERVICE_REQUEST,
  FETCH_CREATE_SERVICE_SUCCESS,
  FETCH_CREATE_SERVICE_FAILURE
} from '../actions/create-service';

export default {
  [TOGGLE_SHOW_KEY_ID]: (state, action) => {
    const environment = state.find(env => env.name === action.payload.keyname);
    const index = state.indexOf(environment);

    return [
      ...state.slice(0, index),
      {...environment, show: !environment.show},
      ...state.slice(index + 1)];
  },
  [FETCH_ALL_SERVICES_REQUEST]: state => {
    // loading: true
    console.error('request');
    return state;
  },
  [FETCH_ALL_SERVICES_SUCCESS]: (state, {data}) => {
    // loading: false,
    // error: null,
    // data
    console.error('success', data);
    return state;
  },
  [FETCH_ALL_SERVICES_FAILURE]: (state, {error}) => {
    // loading: false,
    // error
    console.error('failure', error);
    return state;
  },

  /* Create service */
  [FETCH_CREATE_SERVICE_REQUEST]: state => {
    // loading: true
    console.error('request');
    return state;
  },
  [FETCH_CREATE_SERVICE_SUCCESS]: (state, {data}) => {
    // loading: false,
    // error: null,
    // data
    console.error('!!! success', data, state);
    return state;
  },
  [FETCH_CREATE_SERVICE_FAILURE]: (state, {error}) => {
    // loading: false,
    // error
    console.error('failure', error);
    return state;
  }
};
