import * as React from 'react';
import { shallow } from 'enzyme';
import { Index } from './index';

test('CheckboxWithLabel changes the text after click', () => {
  const checkbox = shallow(<Index labelOn="On" labelOff="Off" />);

  // Interaction demo
  expect(checkbox.text()).toEqual('Off');
  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('On');

  // Snapshot demo
  expect(checkbox).toMatchSnapshot();
});
