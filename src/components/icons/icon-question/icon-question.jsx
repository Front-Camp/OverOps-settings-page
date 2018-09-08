import * as React from 'react';
import PropTypes from 'prop-types';

import {config} from '../config';

export const IconQuestion = ({size, colors}) => {
  const [first, second] = colors;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <g>
        <path
          fill={first}
          d={`M12,0.2C5.5,0.2,0.2,5.5,0.2,12S5.5,23.8,12,23.8S23.8,18.5,23.8,
          12C23.8,5.4,18.5,0.2,12,0.2z`}
        />
        <path
          fill={second}
          d={`M15.6,11.1l-1.1,1.1c-0.9,0.9-1.4,1.6-1.4,3.4h-2.4V15c0-1.3,
          0.5-2.5,1.4-3.4l1.5-1.5c0.4-0.4,0.7-1,0.7-1.7
          c0-1.3-1.1-2.4-2.4-2.4S9.5,7.1,9.5,8.4H7.3c0-2.6,2.1-4.7,
          4.7-4.7s4.7,2.1,4.7,4.7C16.7,9.5,16.3,10.4,15.6,11.1
          M13.2,20.3h-2.4 v-2.4h2.4`}
        />
      </g>
    </svg>
  );
};

IconQuestion.defaultProps = {
  size: config.size,
  colors: [config.color, config.color]
};

IconQuestion.propTypes = {
  size: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string)
};
