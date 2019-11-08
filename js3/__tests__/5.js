const solution = require('../5').solution;

describe('call function in 2nd object (if possible) using the corresponding values in 1st object as function params, return new object', () => {
  it('should return if object is empty ', () => {
    const result = solution({}, {});
    expect(result).toEqual();
  })
  it('should return new object', () => {
    const result = solution({"name": "pikachu", "age": "59", "power": 10, "color": "red"}, {"name": (e) => {return "Raichu"}, "power": (num) => {1000}});
    expect(result).toEqual({"name": "Raichu", "age": "59", "power": 1000, "color": "red"})
  });
  it('should return ', () => {
    const result = solution({"name": "khaleesi", "age": 25, "power": "mother of dragons", "weakness": "john snow"}, {"weakness": (e) => {return "she has none"}, "power": (e) => {return "fire proof"}});
    expect(result).toEqual({"name": "khaleesi", "age": 25, "power": "fire proof", "weakness": "she has none"});
  });
});

