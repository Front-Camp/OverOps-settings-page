import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import styles from './breadcrumbs.scss';

const Breadcrumbs = () => {
  // TODO: we need build it dynamically

  return (
    <div className={styles.breadcrumbs}>
      <div>
        <Link to="/settings/environments">General Settings</Link>
      </div>
      <div>
        <Link to="/settings/environment/Dev">Environment Settings</Link>
      </div>
      {/*&gt; Environments*/}
    </div>
  );
};

export default withRouter(Breadcrumbs);
