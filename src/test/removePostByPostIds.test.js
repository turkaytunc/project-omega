import { removePostByPostIds } from '../http/removePostByPostIds';
import singleData from './singleData.json';

describe('Single delete request', () => {
  test('should return object', () => {
    return removePostByPostIds([1]).then((data) =>
      expect(data).toBeInstanceOf(Object)
    );
  });

  test('should match return result', () => {
    return removePostByPostIds([1, 2]).then((data) =>
      expect(data).toBeInstanceOf(Array)
    );
  });
});
