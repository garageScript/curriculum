const expect = require('chai').expect;
const solution = require('../7').solution;

describe('filter an object if the condition is true', () => {
   it('should return base case when there is only 1 node', () =>{
    const obja = {v: 5};

    const result = solution(obja, 5);
    expect(result).to.deep.equal(obja);
  });

  it('should return the last node', () =>{
    const obj1 = {v: 1};
    const obj2 = {v: 2};
    obj1.next = obj2;

    const result = solution(obj1, 2);
    expect(result).to.deep.equal(obj2);
  });

  it('should return middle node', () =>{
    const obj1 = {v: 1};
    const obj2 = {v: 2};
    const obj3 = {v: 3};
    obj1.next = obj2;
    obj2.next = obj3;

    const result = solution(obj1, 2);
    expect(result).to.deep.equal(obj2);
  });

  it('should return second to last node', () =>{
    const obj1 = {v: 1};
    const obj2 = {v: 2};
    const obj3 = {v: 3};
    const obj4 = {v: 4};
    const obj5 = {v: 5};
    obj1.next = obj2;
    obj2.next = obj3;
    obj3.next = obj4;
    obj4.next = obj5;

    const result = solution(obj1, 4);
    expect(result).to.deep.equal(obj4);
  });
});
