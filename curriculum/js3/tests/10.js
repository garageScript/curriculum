const expect = require('chai').expect;
const solution = require('../10').solution;

describe('given an array, return an array of children', () => {
  it('should handle base case of one node', () => {
    const a = {v: 1, children: []};
    const result = solution(a);
    expect(result).to.deep.equal([[1]]);
  });
  it('should handle case with 2 levels', () => {
    const a = {v: 1, children: []};
    const b = {v: 2, children: []};
    const c = {v: 3, children: []};
    const d = {v: 4, children: []};
    a.children = [b, c, d];
    const result = solution(a);
    expect(result).to.deep.equal([[1], [2, 3, 4]]);
  });
  it('should handle case with 3 levels', () => {
    const a = {v: 1, children: []};
    const b = {v: 2, children: []};
    const c = {v: 3, children: []};
    const d = {v: 4, children: []};
    const e = {v: 5, children: []};
    const f = {v: 6, children: []};
    a.children = [b, c, d];
    c.children = [e, f];
    const result = solution(a);
    expect(result).to.deep.equal([[1], [2, 3, 4], [5, 6]]);
  });
});


