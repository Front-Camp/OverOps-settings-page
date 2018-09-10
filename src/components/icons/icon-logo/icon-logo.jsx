import * as React from 'react';
import PropTypes from 'prop-types';

import {config} from '../config';

export const IconLogo = ({size, colors}) => {
  const [first, second] = colors;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <g>
        <path
          fill={first}
          d={`M6.6,12.4C7.6,5.7,9.1,4,13.4,4c3,0,4.3,0.9,4.4,
          3.9h4.6c-0.3-5.3-3-7.6-8.4-7.6H1.5l4.6,1.9
          c-2.3,1.8-3.6,5-4.3,9.8c-0.1,1-0.2,1.7-0.3,2.9h4.7C6.3,
          13.7,6.4,13.2,6.6,12.4z`}
        />
        <path
          fill={second}
          d={`M17.5,11.8c-1,6.6-2.6,8.4-6.8,8.4c-2.9,0-4.3-0.7-4.4-3.6H1.6c0.4,5.3,3.4,7.1,9,7.1
          c7.3,0,10.4-2.7,11.6-11.6c0.1-0.9,0.2-1.3,0.2-2.5h-4.7C17.8,10.2,17.6,11,17.5,11.8z`}
        />
      </g>
    </svg>
  );
};

IconLogo.defaultProps = {
  size: config.size,
  colors: ['#3FA9F5', '#fff']
};

IconLogo.propTypes = {
  size: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string)
};
