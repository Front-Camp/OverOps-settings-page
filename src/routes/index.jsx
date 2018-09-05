import * as React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from '../components/home';
import Environments from '../components/environments';
// import Navigation from '../components/navigation';

const links = ['/environment', '/team', '/alerts', '/dashboard', '/filter-code', '/storage', '/email-server', '/data-redaction', '/ldap', '/saml', '/public-metrics', '/jira', '/git'];

export class Routes extends React.Component {
  static root = '/';

  render () {
    return (
      <Switch>
        <Route path='/environments' component={Environments} />
        {/* <Route path='/navigation' component={Navigation} /> */}
        {/* {links.map(link => <Route key={link} path={link} component={() => <div>{link.slice(1)}</div>} />)} */}
        <Route
          path={Routes.root}
          render={() => <Home />} />
        <Route render={() => <Redirect to={Routes.root} />} />
      </Switch>
    );
  }
}

export default Routes;
