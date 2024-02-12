// Uncomment the code below and write your tests
import { doStuffByInterval, doStuffByTimeout, readFileAsynchronously } from '.';
import path from 'path';

jest.mock('fs', () => ({
  ...jest.requireActual('fs'),
  existsSync: jest.fn(),
}));

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const spySetTimeout = jest.spyOn(global, 'setTimeout');
    const callback = jest.fn();
    const timeout = 5000;

    doStuffByTimeout(callback, timeout);
    expect(spySetTimeout).toHaveBeenCalledWith(callback, timeout);
  });

  test('should call callback only after timeout', () => {
    const callback = jest.fn();
    const timeout = 5000;

    doStuffByTimeout(callback, timeout);

    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(timeout);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    const callback = jest.fn();
    const interval = 5000;
    const spySetInterval = jest.spyOn(global, 'setInterval');

    doStuffByInterval(callback, interval);

    expect(spySetInterval).toHaveBeenCalledTimes(1);
    expect(spySetInterval).toHaveBeenLastCalledWith(callback, interval);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const callback = jest.fn();
    const interval = 5000;
    doStuffByInterval(callback, interval);

    jest.advanceTimersByTime(interval * 3);

    expect(callback).toHaveBeenCalledTimes(3);
  });
});

describe('readFileAsynchronously', () => {
  jest.mock('fs');

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should call join with pathToFile', async () => {
    const spyJoin = jest.spyOn(path, 'join');
    const pathToFile = 'file.txt';

    await readFileAsynchronously(pathToFile);

    expect(spyJoin).toHaveBeenCalledWith(expect.any(String), pathToFile);
  });

  test('should return null if file does not exist', async () => {
    const pathToFile = 'blabla.txt';

    const result = await readFileAsynchronously(pathToFile);

    expect(result).toBeNull();
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
