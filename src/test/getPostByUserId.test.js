import { getPostByUserId } from '../http/getPostByUserId';
import singleData from './singleData.json';

describe('Single post request', () => {
  test('should return object', () => {
    return getPostByUserId(1).then((data) =>
      expect(data).toBeInstanceOf(Object)
    );
  });

  test('should match return result', () => {
    return getPostByUserId(1).then((data) => expect(data).toEqual(singleData));
  });

  test('should not match return result', () => {
    return getPostByUserId(2).then((data) =>
      expect(data).not.toEqual(singleData)
    );
  });

  test('should not be function', () => {
    return getPostByUserId().then((data) =>
      expect(data).not.toBeInstanceOf(Function)
    );
  });
});
