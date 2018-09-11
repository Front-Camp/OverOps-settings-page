// TODO: implement

import {TOGGLE_SHOW_KEY_ID} from '../actions/services';

export default {
  [TOGGLE_SHOW_KEY_ID]: (state, action) => {
    const environment = state.find(env => env.name === action.payload.keyname);
    const index = state.indexOf(environment);
    return [
      ...state.slice(0, index),
      {...environment, show: !environment.show},
      ...state.slice(index + 1)];
  }
};
