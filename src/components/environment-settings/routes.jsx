import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
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
    return (
      <Switch>
        <Route path="/settings/environment/:envName/team" component={Team} />
        <Route path="/settings/environment/:envName/alerts" component={Alerts} />
        <Route path="/settings/environment/:envName/dashboard" component={Dashboard} />
        <Route path="/settings/environment/:envName/filter-code" component={FilterCode} />
        <Route path="/settings/environment/:envName/storage" component={Storage} />
        <Route path="/settings/environment/:envName/email-server" component={EmailServer} />
        <Route path="/settings/environment/:envName/data-redaction" component={DataRedaction} />
        <Route path="/settings/environment/:envName/ldap" component={Ldap} />
        <Route path="/settings/environment/:envName/saml" component={Saml} />
        <Route path="/settings/environment/:envName/public-metrics" component={PublicMetrics} />
        <Route path="/settings/environment/:envName/jira" component={Jira} />
        <Route path="/settings/environment/:envName/git" component={Git} />
        <Redirect from="/settings/environment/:envName" exact to="/settings/environment/:envName/team" />
      </Switch>
    );
  }
}

export default EnvironmentRoutes;
