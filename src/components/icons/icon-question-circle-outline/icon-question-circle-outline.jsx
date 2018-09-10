import * as React from 'react';
import PropTypes from 'prop-types';

import {config} from '../config';

export const IconQuestionCircleOutline = ({size, color}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <g>
        <path
          fill={color}
          d={`M10.8,19.1h2.4v-2.4h-2.4V19.1
          M12,0.1C5.4,0.1,0.1,5.4,0.1,12S5.4,23.9,12,23.9S23.9,18.6,23.9,12S18.6,0.1,12,0.1
          M12,21.5c-5.2,0-9.5-4.3-9.5-9.5S6.8,2.5,12,2.5s9.5,4.3,9.5,9.5S17.2,21.5,12,21.5
          M12,4.9C9.4,4.9,7.2,7,7.2,9.6h2.4
          c0-1.3,1.1-2.4,2.4-2.4s2.4,1.1,2.4,2.4c0,2.4-3.6,2.1-3.6,5.9h2.4c0-2.7,3.6-3,
          3.6-5.9C16.8,7,14.6,4.9,12,4.9z`}
        />
      </g>
    </svg>
  );
};

IconQuestionCircleOutline.defaultProps = {
  size: config.size,
  color: config.color
};

IconQuestionCircleOutline.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};
