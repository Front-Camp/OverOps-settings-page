import * as React from 'react';
import {shallow} from 'enzyme/build';
import Input from './index';

describe('Input', () => {
  test('Component should be rendered correctly', () => {
    const checkbox = shallow(<Input />);

    // Snapshot demo
    expect(checkbox).toMatchSnapshot();
  });
});
