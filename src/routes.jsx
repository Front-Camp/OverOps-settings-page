import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Content from './components/content/index';

// TODO: rethink it. Maybe this file redundant
export class Routes extends React.Component {
  static root = '/settings';

  static makeRedirect () {
    return () => <Redirect to={Routes.root} />;
  }

  render () {
    return (
      <Switch>
        <Route path={`${Routes.root}`} component={Content} />
        <Route render={Routes.makeRedirect()} />
      </Switch>
    );
  }
}

export default Routes;
