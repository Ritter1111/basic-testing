// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    // Write your test here
    const elem = [1, 2, 3];
    const exp = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            next: null,
            value: null,
          },
        },
      },
    };
    expect(generateLinkedList(elem)).toStrictEqual(exp);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    // Write your test here
    const elem = [4, 5, 6];
    expect(elem).toMatchSnapshot();
  });
});
