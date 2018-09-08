import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Content from './components/content/index';

// TODO: rethink it. Maybe this file redundant
export class Routes extends React.Component {
  static root = '/settings';

  render () {
    return (
      <Switch>
        <Route path={Routes.root} component={Content} />
        <Route render={() => <Redirect from={`${Routes.root}`} to={Routes.root} />} />
      </Switch>
    );
  }
}

export default Routes;
