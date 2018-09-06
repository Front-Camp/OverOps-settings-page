import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import styles from './breadcrumbs.scss';

const Breadcrumbs = () => {
  // TODO: we need build it dynamically

  return (
    <div className={styles.breadcrumbs}>
      <Link to="/settings/environments">Settings</Link>
      &gt; Environments
    </div>
  );
};

export default withRouter(Breadcrumbs);
