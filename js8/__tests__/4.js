const solution = require('../4').solution;

describe('max subtree', () => {
  it('should return root node value', () => {
    const a = {val: 3};
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
    expect(result).toBe(21);
  });
  it('should return 1st level left node value', () => {
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
    expect(result).toBe(11);
  });
  it('should return top level right node value', () => {
    const a = {val: -5};
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
    expect(result).toBe(607);
  });
  it('should return mid level right node value', () => {
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
    expect(result).toBe(601);
  });
});
