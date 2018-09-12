import React from 'react';
import Loader from './index';
import {shallow} from 'enzyme/build';

xdescribe('Loader', () => {
  it('Component should be rendered correctly', () => {
    const component = shallow(<Loader />);

    // Snapshot demo
    expect(component).toMatchSnapshot();
  });
});
