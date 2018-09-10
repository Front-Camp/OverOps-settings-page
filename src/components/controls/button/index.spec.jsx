import * as React from 'react';
import {shallow} from 'enzyme/build';
import Button from './index';

describe('Button', () => {
  test('Component should be rendered correctly', () => {
    const checkbox = shallow(<Button />);

    // Snapshot demo
    expect(checkbox).toMatchSnapshot();
  });
});
