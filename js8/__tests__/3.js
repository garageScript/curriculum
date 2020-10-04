const solution = require('../3').solution;

describe('max distance between 2 nodes', () => {
  it('should return distance 2 for tree with 3 nodes', () => {
    const a = {val: 'a'};
    const b = {val: 'b'};
    const c = {val: 'c'};
    a.left = b;
    a.right = c;
    const result = solution(a);
    expect(result).toBe(2);
  });
  it('should return distance 3 for tree with 5 nodes', () => {
    const a = {val: 'a'};
    const b = {val: 'b'};
    const c = {val: 'c'};
    const d = {val: 'd'};
    const e = {val: 'e'};
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    const result = solution(a);
    expect(result).toBe(3);
  });
  it('should return distance 4 using right child nodes', () => {
    const a = {val: 'a'};
    const b = {val: 'b'};
    const c = {val: 'c'};
    const d = {val: 'd'};
    const e = {val: 'e'};
    const f = {val: 'f'};
    const g = {val: 'g'};
    const h = {val: 'h'};
    const i = {val: 'i'};
    a.left = b;
    a.right = c;
    c.left = d;
    c.right = e;
    d.left = f;
    e.left = g;
    f.left = h;
    g.right = i;
    const result = solution(a);
    expect(result).toBe(6);
  });
  it('should return distance 4 using left child nodes', () => {
    const a = {val: 'a'};
    const b = {val: 'b'};
    const c = {val: 'c'};
    const d = {val: 'd'};
    const e = {val: 'e'};
    const f = {val: 'f'};
    const g = {val: 'g'};
    const h = {val: 'h'};
    const i = {val: 'i'};
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    d.left = f;
    e.left = g;
    f.left = h;
    g.right = i;
    const result = solution(a);
    expect(result).toBe(6);
  });
});
