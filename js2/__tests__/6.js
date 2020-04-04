const solution = require('../6').solution;

describe('Sequential delayed function calls', () => {
  describe('each function is called once, in order, after given delay', () => {
    const delay = 5;
    const mockCount = 5;
    let mocks = [];

    const getMocks = () =>
      Array(mockCount)
        .fill(null)
        .map((_) => jest.fn());

    beforeEach(() => {
      jest.useFakeTimers();
      mocks = getMocks();
      solution(mocks, delay);
    });

    test('each function is called exactly once', () => {
      jest.advanceTimersByTime(mocks.length * delay);
      mocks.forEach((mock) => expect(mock).toHaveBeenCalledTimes(1));
    });

    test('functions are not called too early', () => {
      expect(mocks[0]).not.toBeCalled();
      mocks.forEach((_, i) => {
        jest.advanceTimersByTime(delay);
        mocks.slice(i + 1).forEach((mock) => expect(mock).not.toBeCalled());
      });
    });

    test('function are not called too late', () => {
      mocks.forEach((_, i) => {
        jest.advanceTimersByTime(delay);
        mocks.slice(0, i + 1).forEach((mock) => {
          expect(mock).toBeCalled();
        });
      });
    });
  });
});
