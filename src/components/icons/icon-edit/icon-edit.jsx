import * as React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/utils/colors.scss';

export const IconEdit = ({size = 24, color = 'black1'}) => {
  return <svg width={size} height={size} viewBox="0 0 24 24">
    <g fill={styles[color]}>
      <path
        d={`M14.9,4.2L19.7,9L7.6,21.1l-4.8-4.8L14.9,4.2z
        M23.3,3.1l-2.2-2.2c-0.8-0.8-2.2-0.8-3,0L16.1,3l4.9,4.8l2.4-2.4
        C23.9,4.8,23.9,3.7,23.3,3.1z
        M0.3,23c-0.1,0.4,0.3,0.7,0.7,0.7l5.3-1.3l-4.8-4.8L0.3,23z`}
      />
    </g>
  </svg>;
};

IconEdit.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};
