import {hideCharacters} from './utils';

describe('hideCharacters', () => {
  test('should hide all characters when from argument is 0', () => {
    expect(hideCharacters('12345', 0)).toEqual('*****');
  });

  test('should reveal only one character when from argument is 2', () => {
    expect(hideCharacters('12345', 2)).toEqual('12***');
  });

  test('should reveal all characters when from argument is greater than string length', () => {
    expect(hideCharacters('12345', 15)).toEqual('12345');
  });

  test('should work with negative from parameter', () => {
    expect(hideCharacters('12345', -1)).toEqual('1234*');
  });

  test('should work with negative from parameter 2', () => {
    expect(hideCharacters('12345', -10)).toEqual('*****');
  });
});
