export const createReducers = (reducerObj: any) => {
  return Object.keys(reducerObj).reduce((accum: any, reducerName: any) => {
    accum[reducerName] = createReducer(reducerObj[reducerName]);

    return accum;
  }, {});
};

const createReducer = (handlers: any) => {
  return (state = null, action: any) => {
    if (handlers[action.type]) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};

