const solution = require('../6').solution;

describe('max fun', () => {
  it('should return root node in 3 node tree', () => {
    const a = {val: 30};
    const b = {val: 2};
    const c = {val: 4};
    a.children = [b, c];
    const result = solution(a);
    expect(result).toBe(30);
  });
  it('should return children nodes in a 3 node tree', () => {
    const a = {val: 5};
    const b = {val: 4};
    const c = {val: 3};
    a.children = [b, c];
    const result = solution(a);
    expect(result).toBe(7);
  });
  it('should skip top and ending nodes', () => {
    const a = {val: 5};
    const b = {val: 4};
    const c = {val: 6};
    const d = {val: 2};
    const e = {val: 1};
    a.children = [b, c];
    b.children = [d];
    c.children = [e];
    const result = solution(a);
    expect(result).toBe(10);
  });
  it('should skip middle nodes', () => {
    const a = {val: 500};
    const b = {val: 4};
    const c = {val: 6};
    const d = {val: 2};
    const e = {val: 1};
    a.children = [b, c];
    b.children = [d];
    c.children = [e];
    const result = solution(a);
    expect(result).toBe(503);
  });
  it('should skip 2 levels', () => {
    const a = {val: 5};
    const b = {val: 4};
    const c = {val: 3};
    const d = {val: 8};
    a.children = [b];
    b.children = [c];
    c.children = [d];
    const result = solution(a);
    expect(result).toBe(13);
  });
  it('should skip some nodes in middle level', () => {
    const a = {val: 100};
    const b = {val: 6};
    const c = {val: 3};
    const d = {val: 8};
    const e = {val: 3};
    const f = {val: 4};
    const g = {val: 400};
    a.children = [b, c, d];
    b.children = [e, f];
    e.children = [g];
    const result = solution(a);
    expect(result).toBe(504);
  });
});
