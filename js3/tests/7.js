const expect = require('chai').expect;
const solution = require('../7').solution;

describe('return the greatest value in the given linked list', () => {
   it('should return the value of the first node when there is only 1 node', () =>{
    const obja = { v: 5 };
    expect(solution(obja)).to.equal(obja.v);
  });

  it('should return the value of the last node', () =>{
    const obj1 = { v: 1 };
    const obj2 = { v: 2 };
    obj1.next = obj2;
    expect(solution(obj1)).to.equal(obj2.v);
  });

  it('should return the value of the middle node', () =>{
    const obj1 = { v: 1 };
    const obj2 = { v: 3 };
    const obj3 = { v: 2 };
    obj1.next = obj2;
    obj2.next = obj3;
    expect(solution(obj1)).to.equal(obj2.v);
  });

  it('should return the value of the second to last node', () =>{
    const obj1 = { v: 1 };
    const obj2 = { v: 2 };
    const obj3 = { v: 3 };
    const obj4 = { v: 5 };
    const obj5 = { v: 4 };
    obj1.next = obj2;
    obj2.next = obj3;
    obj3.next = obj4;
    obj4.next = obj5;
    expect(solution(obj1)).to.equal(obj4.v);
  });
});
