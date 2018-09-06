import * as React from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import Environments from './environments';
import Api from './api';
import PersonalData from './personal-data';
import EnvironmentSettings from '../environment-settings';

export class SettingsRoutes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path="/settings/environments" component={Environments} />
        <Route path="/settings/environment" component={EnvironmentSettings} />
        <Route path="/settings/personal-data" component={PersonalData} />
        <Route path="/settings/api" component={Api} />
        <Redirect from="/settings" exact to="/settings/environments" />
      </Switch>
    );
  }
}

export default withRouter(SettingsRoutes);
