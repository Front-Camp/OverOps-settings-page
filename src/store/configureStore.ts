import { createStore, applyMiddleware, compose } from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
// import {example} from './enhancers/example';

const composeEnhancers = (
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

interface InitialStore {
  counter: number,
  itemsList: Array<Object>
}

const configureStore = (initialState: InitialStore) => {
  const logger = createLogger();

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, logger, /*example*/))
  );
};

export default configureStore;
