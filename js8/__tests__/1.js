const solution = require('../1').solution;

describe('max value', () => {
  it('should return root node', () => {
    const a = {val: 30};
    const b = {val: 2};
    const c = {val: 4};
    const d = {val: 5};
    const e = {val: 6};
    const f = {val: 1};
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    const result = solution(a);
    expect(result).toBe(30);
  });
  it('should return deepest node', () => {
    const a = {val: -5};
    const b = {val: 3};
    const c = {val: 1};
    const d = {val: 2};
    const e = {val: 6};
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    const result = solution(a);
    expect(result).toBe(6);
  });
  it('should return mid node with all negative numbers', () => {
    const a = {val: -5};
    const b = {val: -3};
    const c = {val: -1};
    const d = {val: -2};
    const e = {val: -6};
    const f = {val: -600};
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    const result = solution(a);
    expect(result).toBe(-1);
  });
  it('should return deepest right node value', () => {
    const a = {val: -50};
    const b = {val: 3};
    const c = {val: 1};
    const d = {val: 2};
    const e = {val: 6};
    const f = {val: 600};
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    const result = solution(a);
    expect(result).toBe(600);
  });
});
