import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import configureStore from './store/configureStore';
import Routes from './routes';

const store = configureStore({counter: 0});

// TODO: implement theme provider https://material-ui.com/customization/themes/
const Index = () => (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Routes />
    </Router>
  </Provider>
);

const appContainer = document.getElementById('app');
const renderApp = () => render(<Index />, appContainer);

renderApp();
