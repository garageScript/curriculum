const solution = require('../3').solution;

describe('given an array of strings, invoking the returned function returns an object of key/value pairs with keys from the input array', () => {
  it('should return an empty object {}', () => {
    const result = solution([], {});
    expect(result).toEqual({});
  });
  it('should return empty object if nothing matches between object keys and array', () => {
    const result = solution(['morning', 'noon', 'suppertime'], {'brunch': 'mimosas', 'afternoon': 'mid-day snack', 'dinner': 'roast beef'});
    expect(result).toEqual({});
  })
  it('should return object with keys from input array and its paired values', () => {
    const result = solution(['breakfast', 'lunch'], {'breakfast': 'french toast', 'lunch': 'sandwhich', 'dinner': 'pasta'});
    expect(result).toEqual({'breakfast': 'french toast', 'lunch': 'sandwhich'});
  });
  it('should return object with keys from input array and its paired values', () => {
    const result = solution(['sports', 'work'], {'sports': 'basketball', 'work': 'software engineering', 'hobbies': 'knitting'});
    expect(result).toEqual({'sports': 'basketball', 'work': 'software engineering'});
  });
  it('should return object with keys from input array and its paired values', () => {
    const result = solution(['friends', 'family'], {'friends': 'close', 'family': 'closer', 'enemies': 'far away'});
    expect(result).toEqual({'friends': 'close', 'family': 'closer'});
  });
});

