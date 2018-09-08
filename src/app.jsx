import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import configureStore from './store/configureStore';
import Routes from './routes';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {services} from './store/__mocks__/mocked-store';

import './app.scss';

// TODO: rethink it
const theme = createMuiTheme({
  palette: {
    primary: { main: '#323a41' }, // Purple and green play nicely together.
    secondary: { main: '#778796' }, // This is just green.A700 as hex.
  },
});

const store = configureStore({
  counter: 0,
  services
});

// TODO: implement theme provider https://material-ui.com/customization/themes/
const Index = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Routes />
      </Router>
    </Provider>
  </MuiThemeProvider>
);

const appContainer = document.getElementById('app');
const renderApp = () => render(<Index />, appContainer);

renderApp();
