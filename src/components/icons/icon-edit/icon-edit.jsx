import * as React from 'react';

import {config} from '../config';

export const IconEdit = ({size, color}) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <g fill={color}>
      <path
        d={`M14.9,4.2L19.7,9L7.6,21.1l-4.8-4.8L14.9,4.2z
        M23.3,3.1l-2.2-2.2c-0.8-0.8-2.2-0.8-3,0L16.1,3l4.9,4.8l2.4-2.4
        C23.9,4.8,23.9,3.7,23.3,3.1z
        M0.3,23c-0.1,0.4,0.3,0.7,0.7,0.7l5.3-1.3l-4.8-4.8L0.3,23z`}
      />
    </g>
  </svg>
);

IconEdit.defaultProps = {
  size: config.size,
  color: config.color
};
