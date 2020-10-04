const curry = require('../5');

describe('Curry', function() {
  let add;
  beforeEach(function() {
    add = (a, b, c) => {
      return a+b+c;
    };
  });

  it('curry should return a function if no parameters are passed in', function() {
    expect(curry(add)).toBeInstanceOf(Function);
  });
  it('should work if all parameters are passed in', function() {
    const cAdd = curry(add);
    expect( cAdd(1, 2, 3) ).toBe(6);
  });
  it('should return a function if 2 / 3 parameters are passed in', function() {
    const cAdd = curry(add);
    expect(cAdd(1, 2)).toBeInstanceOf(Function);
  });
  it('should return the result if 1,2 and then 3 is passed in', function() {
    const cAdd = curry( add );
    expect( cAdd(1, 2)(3) ).toBe(6);
  });
  it('should return the result if 1 and then 2,3 is passed in', function() {
    const cAdd = curry( add );
    expect( cAdd(1)(2, 3) ).toBe(6);
  });
  it('should return the result if 1 and then 2 and then 3 is passed in', function() {
    const cAdd = curry( add );
    expect( cAdd(1)(2)(3) ).toBe(6);
  });
});
