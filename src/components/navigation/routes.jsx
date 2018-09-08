import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navigation from './navigation';

export class NavigationRoutes extends React.Component {
  render () {
    return (
      <Switch>
        <Route
          exact
          path="/settings/environments"
          component={props => <Navigation settings="general" {...props} />} />
        <Route
          path="/settings/environment/:envName"
          render={props => <Navigation settings="environment" {...props} />} />
      </Switch>
    );
  }
}

export default NavigationRoutes;
