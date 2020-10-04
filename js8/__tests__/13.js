const solution = require('../13').solution;

describe('distance between 2 nodes', () => {
  it('should return distance 2 for tree with 3 nodes', () => {
    const a = {val: 3};
    const b = {val: 2};
    const c = {val: 4};
    a.left = b;
    a.right = c;
    const result = solution(a, b, c);
    expect(result).toBe(2);
  });
  it('should return distance 1 for tree with 3 nodes, root and right', () => {
    const a = {val: 3};
    const b = {val: 2};
    const c = {val: 4};
    a.left = b;
    a.right = c;
    let result = solution(a, a, c);
    expect(result).toBe(1);
  });
  it('should return distance 1 for tree with 3 nodes, root and left', () => {
    const a = {val: 3};
    const b = {val: 2};
    const c = {val: 4};
    a.left = b;
    a.right = c;
    const result = solution(a, a, b);
    expect(result).toBe(1);
  });
  it('should return distance for nodes on left side', () => {
    const a = {val: 'a'};
    const b = {val: 'b'};
    const c = {val: 'c'};
    const d = {val: 'd'};
    const e = {val: 'e'};
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    const result = solution(a, d, e);
    expect(result).toBe(2);
  });
  it('should return distance for nodes on left plus right side', () => {
    const a = {val: 'a'};
    const b = {val: 'b'};
    const c = {val: 'c'};
    const d = {val: 'd'};
    const e = {val: 'e'};
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    const result = solution(a, d, c);
    expect(result).toBe(3);
  });
  it('should return distance for deep tree left and right', () => {
    const a = {val: 3};
    const b = {val: 2};
    const c = {val: 4};
    const d = {val: 5};
    const e = {val: 6};
    const f = {val: 1};
    const g = {val: 1};
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    c.left = g;
    const result = solution(a, e, g);
    expect(result).toBe(4);
  });
  it('should return distance for deep tree left and right', () => {
    const a = {val: 3};
    const b = {val: 2};
    const c = {val: 4};
    const d = {val: 5};
    const e = {val: 6};
    const f = {val: 1};
    const g = {val: 1};
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    c.left = g;
    const result = solution(a, b, f);
    expect(result).toBe(3);
  });
  it('should return distance for deep tree root and right', () => {
    const a = {val: 3};
    const b = {val: 2};
    const c = {val: 4};
    const d = {val: 5};
    const e = {val: 6};
    const f = {val: 1};
    const g = {val: 1};
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    c.left = g;
    const result = solution(a, a, g);
    expect(result).toBe(2);
  });
});
