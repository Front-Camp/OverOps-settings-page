import * as React from 'react';
import {shallow} from 'enzyme/build';
import SubTitle from './index';

describe('SubTitle', () => {
  test('Component should be rendered correctly', () => {
    const checkbox = shallow(<SubTitle />);

    // Snapshot demo
    expect(checkbox).toMatchSnapshot();
  });
});
