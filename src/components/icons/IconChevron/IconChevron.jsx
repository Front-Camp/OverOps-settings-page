import * as React from 'react';

import {config} from '../config';

export const IconChevron = ({size, color}) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <g fill={color}>
      <path
        d={'M23.9,8.4L12,20.4L0.1,8.4l2.8-2.8l9.1,9.2l9.1-9.2L23.9,8.4z'}
      />
    </g>
  </svg>
);

IconChevron.defaultProps = {
  size: config.size,
  color: config.color
};
