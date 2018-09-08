import * as React from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import Ldap from './ldap';
import Saml from './saml';
import PublicMetrics from './public-metrics';
import Jira from './jira';
import Git from './git';
import Storage from './storage';
import DataRedaction from './data-redaction';
import Team from './team';
import Alerts from './alerts';
import Dashboard from './dashboard';
import FilterCode from './filter-code';
import EmailServer from './email-server';

export class EnvironmentRoutes extends React.Component {
  render () {
    const {path} = this.props.match;

    return (
      <Switch>
        <Route path={`${path}/team`} component={Team} />
        <Route path={`${path}/team`} component={Team} />
        <Route path={`${path}/alerts`} component={Alerts} />
        <Route path={`${path}/dashboard`} component={Dashboard} />
        <Route path={`${path}/filter-code`} component={FilterCode} />
        <Route path={`${path}/storage`} component={Storage} />
        <Route path={`${path}/email-server`}  component={EmailServer} />
        <Route path={`${path}/data-redaction`} component={DataRedaction} />
        <Route path={`${path}/ldap`} component={Ldap} />
        <Route path={`${path}/saml`} component={Saml} />
        <Route path={`${path}/public-metrics`} component={PublicMetrics} />
        <Route path={`${path}/jira`} component={Jira} />
        <Route path={`${path}/git`} component={Git} />
        <Redirect from={path} to={`${path}/team`} />
      </Switch>
    );
  }
}

export default withRouter(EnvironmentRoutes);
