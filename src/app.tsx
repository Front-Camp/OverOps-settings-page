import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import configureStore from './store/configureStore';
import Routes from './routes';

const initStore = {
  counter: 0,
  itemsList: [
    {id: 1, value: 'some list item 1'},
    {id: 2, value: 'some list item 2'},
    {id: 3, value: 'some list item 3'}
  ]
};

const store = configureStore(initStore);

const Index: React.SFC = () => (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Routes />
    </Router>
  </Provider>
);

const appContainer = document.getElementById('app');
const renderApp = () => render(<Index />, appContainer);

export default renderApp;
