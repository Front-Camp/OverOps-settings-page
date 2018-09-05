import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Team from './team';
import Environments from './environments';

export class Settings extends React.Component {
  render () {
    return (
      <Switch>
        <Route path="/environments" render={() => <Environments />} />
        <Route path="/team" render={() => <Team />} />
        <Redirect from="/" exact to="/environments" />
      </Switch>
    );
  }
}

export default Settings;
