import * as React from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import EnvironmentsList from './environments-list';
import Api from './api';
import PersonalData from './personal-data';

export class GeneralSettingsRoutes extends React.Component {
  render () {
    const {path} = this.props.match;

    return (
      <Switch>
        <Route path={`${path}/environments`} component={EnvironmentsList} />
        <Route path={`${path}/personal-data`} component={PersonalData} />
        <Route path={`${path}/api`} component={Api} />
        <Redirect from={path} to={`${path}/environments`} />
      </Switch>
    );
  }
}

export default withRouter(GeneralSettingsRoutes);
