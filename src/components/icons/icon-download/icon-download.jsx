import * as React from 'react';

import {config} from '../config';

export const IconDownload = ({size, color}) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <g fill={color}>
      <path
        d={`M15,23.9c0.3,0,0.5-0.3,0.5-0.5l-0.3-2.5H8.8l-0.3,2.5c0,0.3,0.2,0.5,0.5,0.5H15z 
        M2.2,20.2h6.7h6.3h6.7
        c0.7,0,1.2-0.5,1.2-1.2V6.2C23,5.6,22.5,5,21.8,5H17v1.9h3.3c0.4,0,0.6,
        0.3,0.6,0.6v10.1c0,0.4-0.3,0.6-0.6,0.6h-5.4H9.1H3.7
        c-0.4,0-0.6-0.3-0.6-0.6V7.5c0-0.4,0.3-0.6,0.6-0.6H7V5H2.2C1.5,5,1,5.6,1,
        6.2V19C1,19.6,1.5,20.2,2.2,20.2z M16.4,5V4.7V4.4V1.1
        c0-0.6-0.4-1-1-1H8.6c-0.6,0-1,0.4-1,1v3.3v0.3V5v1.9v1.5H6.2C5.9,8.4,5.7,
        8.8,5.9,9l5.5,5.1c0.2,0.1,0.4,0.2,0.6,0.2
        s0.4-0.1,0.6-0.2L18.1,9c0.2-0.2,0.1-0.6-0.2-0.6h-1.5V6.9L16.4,5L16.4,5z`}
      />
    </g>
  </svg>
);

IconDownload.defaultProps = {
  size: config.size,
  color: config.color
};
