import * as React from 'react';
import {shallow} from 'enzyme/build';
import Title from './index';

describe('Title', () => {
  test('Component should be rendered correctly', () => {
    const checkbox = shallow(<Title />);

    // Snapshot demo
    expect(checkbox).toMatchSnapshot();
  });
});
