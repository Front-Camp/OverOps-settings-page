import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import styles from './breadcrumbs.scss';

const Breadcrumbs = ({match}) => {
  const items = match.url.split('/').filter(item => item);

  return (
    <div className={styles.breadcrumbs}>
      {
        items.map((item, index) => {
          return (
            <span className={styles.item} key={index}>
              <Link to="/settings">{item}</Link>
              {
                index < items.length - 1
                  ? <span>&nbsp; &gt; &nbsp;</span>
                  : null
              }
            </span>
          );
        })
      }
    </div>
  );
};

export default withRouter(Breadcrumbs);
