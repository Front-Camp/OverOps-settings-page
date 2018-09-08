import * as React from 'react';
import PropTypes from 'prop-types';

import {config} from '../config';

export const IconEye = ({size, color}) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <g fill={color}>
      <path
        d={`M12,8.8c1.8,0,3.2,1.5,3.2,3.2s-1.5,3.2-3.2,3.2S8.8,13.8,8.8,12S10.2,8.8,12,8.8
        M12,3.9c5.4,0,10,3.4,11.9,8.1
        c-1.9,4.7-6.5,8.1-11.9,8.1S2,16.7,0.1,12C2,7.3,6.6,3.9,12,3.9
        M2.5,12c1.8,3.6,5.5,5.9,9.5,5.9s7.7-2.3,9.5-5.9
        c-1.8-3.6-5.5-5.9-9.5-5.9S4.3,8.4,2.5,12z`}
      />
    </g>
  </svg>
);

IconEye.defaultProps = {
  size: config.size,
  color: config.color
};

IconEye.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};
