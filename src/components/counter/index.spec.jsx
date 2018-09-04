import * as React from 'react';
import { shallow } from 'enzyme';

import Counter from './index';
import createMockStore from '../../test-config-files/createMockStore';

describe('Components', () => {
  const mockStore = createMockStore();
  const store = mockStore({});

  test('Counter', () => {
    // @ts-ignore
    const checkbox = shallow(<Counter store={store} />);

    // Snapshot demo
    expect(checkbox).toMatchSnapshot();
  });
});
