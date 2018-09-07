import * as React from 'react';

import {config} from '../config';

export const IconClose = ({size, color}) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <g fill={color}>
      <path
        d={`M23.9,2.5L14.4,12l9.5,9.5l-2.4,2.4L12,14.4l-9.5,9.5l-2.4-2.4L9.6,
        12L0.1,2.5l2.4-2.4L12,9.6l9.5-9.5L23.9,2.5z`}
      />
    </g>
  </svg>
);

IconClose.defaultProps = {
  size: config.size,
  color: config.color
};
