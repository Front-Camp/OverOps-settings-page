import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Content from '../components/content';

// TODO: rethink it. Maybe this file redundant
export class Routes extends React.Component {
  static root = '/';

  render () {
    return (
      <Switch>
        <Route path={Routes.root} render={() => <Content />} />
        <Route render={() => <Redirect to={Routes.root} />} />
      </Switch>
    );
  }
}

export default Routes;
