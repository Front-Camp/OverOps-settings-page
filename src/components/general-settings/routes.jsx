import * as React from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import Environments from './environments';
import Api from './api';
import PersonalData from './personal-data';

export class GeneralSettingsRoutes extends React.Component {
  render () {
    const {path} = this.props.match;

    return (
      <Switch>
        <Route exact path={`${path}/environments`} component={Environments} />
        <Route path={`${path}/personal-data`} component={PersonalData} />
        <Route path={`${path}/api`} component={Api} />
        <Redirect exact from={`${path}`} to={`${path}/environments`} />
      </Switch>
    );
  }
}

export default withRouter(GeneralSettingsRoutes);
