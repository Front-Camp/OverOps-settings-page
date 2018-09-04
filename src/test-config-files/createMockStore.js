import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middleware = [
  thunk
];

const createMockStore = () => configureMockStore(middleware);

export default createMockStore;
