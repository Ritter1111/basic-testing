// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  {
    a: 1,
    b: 2,
    action: Action.Add,
    expected: 3,
    description: 'should add two numbers',
  },
  {
    a: 2,
    b: 2,
    action: Action.Add,
    expected: 4,
    description: 'should add two numbers',
  },
  {
    a: 3,
    b: 2,
    action: Action.Add,
    expected: 5,
    description: 'should add two numbers',
  },
  {
    a: 3,
    b: 2,
    action: Action.Subtract,
    expected: 1,
    description: 'should subtract two numbers',
  },
  {
    a: 3,
    b: 3,
    action: Action.Subtract,
    expected: 0,
    description: 'should subtract two numbers',
  },
  {
    a: 3,
    b: 2,
    action: Action.Multiply,
    expected: 6,
    description: 'should multiply two numbers',
  },
  {
    a: 3,
    b: 3,
    action: Action.Multiply,
    expected: 9,
    description: 'should multiply two numbers',
  },
  {
    a: 3,
    b: 3,
    action: Action.Divide,
    expected: 1,
    description: 'should divide two numbers',
  },
  {
    a: 3,
    b: 3,
    action: Action.Exponentiate,
    expected: 27,
    description: 'should exponentiate two numbers',
  },
  // continue cases for other actions
];

interface TestCase {
  a: number;
  b: number;
  action: Action;
  expected: number;
}

describe('simpleCalculator', () => {
  const testCallback = ({ a, b, action, expected }: TestCase) => {
    return () => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    };
  };

  testCases.forEach((item) => {
    test(item.description, testCallback(item));
  });
});
