import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Content from '../components/content';

// TODO: rethink it. Maybe this file redundant
export class Routes extends React.Component {
  static root = '/settings';

  render () {
    return (
      <Switch>
        <Route exact path={Routes.root} component={Content} />
        <Route path={`${Routes.root}/:subRoute`} component={Content} />
        <Route render={() => <Redirect to={Routes.root} />} />
      </Switch>
    );
  }
}

export default Routes;
