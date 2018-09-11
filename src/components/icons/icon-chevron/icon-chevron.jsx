import * as React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../styles/utils/colors.scss';

export const IconChevron = ({size = 24, color = 'black1'}) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <g fill={styles[color]}>
      <path
        d={'M23.9,8.4L12,20.4L0.1,8.4l2.8-2.8l9.1,9.2l9.1-9.2L23.9,8.4z'}
      />
    </g>
  </svg>
);

IconChevron.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};
