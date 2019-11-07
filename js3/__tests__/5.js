const solution = require('../5').solution;

describe('using the same keys, call functions in 2nd object using values from 1st object as params', () => {
  it('should return ""', () => {
    const result = solution({}, {});
    expect(result).toEqual("");
  })
  it('should return "johnnyboy"', () => {
    const result = solution({'name': 'johnny'}, {'name': (e) => {console.log(e + 'boy')}, 'lastname': (e) => {console.log(e + 'girl')}});
    expect(result).toEqual('johnnyboy');
  });
  it('should return ', () => {
    const result = solution({'shoes': 'new balances'}, {'pants': (e) => {console.log(e + 'khakis')}, 'shoes': (e) => {console.log(e + ' are comfy')}});
    expect(result).toEqual('new balances are comfy');
  });
});

