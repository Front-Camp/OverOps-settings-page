import React from 'react';
import Spinner from './index';
import {shallow} from 'enzyme/build';

describe('Spinner', () => {
  it('Component should be rendered correctly', () => {
    const component = shallow(<Spinner />);

    // Snapshot demo
    expect(component).toMatchSnapshot();
  });
});
