/* global describe, it, expect */

const solution = require("../5").solution;

describe("max 3", () => {
  it("should find the max of 3 numbers", () => {
    const result = solution(6, 6, 7);
    expect(result).toEqual(7);
  });
  it("should find the max of 3 negative numbers", () => {
    const result = solution(-2, -3, -9);
    expect(result).toEqual(-2);
  });
  it("should find the max when there are positive and negative parameters", () => {
    const result = solution(-2, -2, 9);
    expect(result).toEqual(9);
  });
  it("should find the max where max is the first parameter", () => {
    const result = solution(3, 2, 1);
    expect(result).toEqual(3);
  });
  it("should find the max where max is the second parameter", () => {
    const result = solution(1, 3, 2);
    expect(result).toEqual(3);
  });
});
