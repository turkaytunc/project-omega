import { getPosts } from '../http/getPosts';
import reqData from './posts.json';

describe('Request all posts', () => {
  test('should return object', () => {
    return getPosts().then((data) => expect(data).toBeInstanceOf(Object));
  });

  test('should match return result', () => {
    return getPosts().then((data) => expect(data).toEqual(reqData));
  });
});

describe('Check return type', () => {
  test('should not be function', () => {
    return getPosts().then((data) => expect(data).not.toBeInstanceOf(Function));
  });
  test('should not be String', () => {
    return getPosts().then((data) => expect(data).not.toBeInstanceOf(String));
  });
});
