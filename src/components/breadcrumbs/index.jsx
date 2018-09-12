import React from 'react';
import {Link, withRouter, Route} from 'react-router-dom';
import styles from './breadcrumbs.scss';

const BreadcrumbLink = ({match}) => {
  return (
    !match.isExact
      ? <Link to={match.url || ''}>{match.params.path}</Link>
      : <span className={styles['active-link']}>{match.params.path}</span>
  );
};

const BreadcrumbsItem = ({ match }) => {
  return (
    <span>
      <span className={styles.item}>
        <BreadcrumbLink match={match} />
        {
          !match.isExact ? <span>&nbsp; &gt; &nbsp;</span> : null
        }
      </span>
      <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
  </span>
  );
};

const Breadcrumbs = () => {
  return (
    <span className={styles.breadcrumbs}>
      <Route path='/:path' component={BreadcrumbsItem} />
    </span>
  );
};

export default withRouter(Breadcrumbs);
