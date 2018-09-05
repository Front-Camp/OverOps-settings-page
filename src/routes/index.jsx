import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/home';
import Environments from '../components/environments';
import Navigation from '../components/navigation';

export class Routes extends React.Component {
  static root = '/';

  render () {
    return (
      <Switch>
        <Route path="/environments" component={Environments} />
        <Route path="/navigation" component={Navigation} />
        <Route
          path={Routes.root}
          render={() => <Home />} />
        <Route render={() => <Redirect to={Routes.root} />} />
      </Switch>
    );
  }
}

export default Routes;
