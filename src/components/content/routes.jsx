import * as React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import EnvironmentSettings from '../environment-settings';
import GeneralSettings from '../general-settings';

export class ContentRoutes extends React.Component {
  render () {
    const {path} = this.props.match;

    return (
      <Switch>
        <Route path={`${path}/environment/:envName?`} component={EnvironmentSettings} />
        <Route path={path} component={GeneralSettings} />
      </Switch>
    );
  }
}

export default withRouter(ContentRoutes);
