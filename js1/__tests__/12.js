/* global describe it */

const solution = require("../12").solution;

const mockFn = jest.fn();

jest.useFakeTimers();
mockFn.mockReturnValue(100);

describe("call functions", function () {
  it("Function should only run twice", () => {
    solution(50, mockFn);

    expect(mockFn).not.toBeCalled();

    // runtime 50ms
    jest.advanceTimersByTime(50);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // runtime 100ms
    jest.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledTimes(2);

    // runtime 200ms
    jest.advanceTimersByTime(200);
    expect(mockFn).toHaveBeenCalledTimes(2);

    // run  time 500ms
    jest.advanceTimersByTime(500);
    expect(mockFn).toHaveBeenCalledTimes(2);

    jest.clearAllTimers();
  });
});
