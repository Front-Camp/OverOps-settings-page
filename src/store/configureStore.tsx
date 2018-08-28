import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
// import {example} from './enhancers/example';

const configureStore = (initialState: any) => {
  const logger = createLogger();

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger, /*example*/)
  );
};

export default configureStore;
