/*
 * isCircular - Takes in the first node of a
 *     linked list, return if the linked-list
 *     loops into itself
 * Example:
 * input:
 *    a = {v: 2};
 *    b = {v: 3};
 *    c = {v: 1};
 *    a.next = b;
 *    b.next = c;
 *    c.next = a;
 *    solution(a);
 * output: true
 * @param {object} node
 * @returns {boolean}
*/

const solution = (a)=>{
  return true;
};

// describe('circular linked list', () => {
//   it('should return false for one node that is not circular', () => {
//     const obja = {
//       v: 5
//     };

//     const result = solution(obja);
//     expect(result).to.equal(false);
//   });

//   it('should return true for one node that is circular', () => {
//     const obja = {
//       v: 5
//     };
//     obja.next = obja;

//     const result = solution(obja);
//     expect(result).to.equal(true);
//   });

//   it('should return false for non-circular linked list with 3 nodes', () => {
//     const obj1 = {
//       v: 1
//     };
//     const obj2 = {
//       v: 2
//     };
//     const obj3 = {
//       v: 3
//     };
//     obj1.next = obj2;
//     obj2.next = obj3;

//     const result = solution(obj1);
//     expect(result).to.equal(false);
//   });

//   it('should return true for circular linked list with 3 nodes', () => {
//     const obj1 = {
//       v: 1
//     };
//     const obj2 = {
//       v: 2
//     };
//     const obj3 = {
//       v: 3
//     };
//     obj1.next = obj2;
//     obj2.next = obj3;
//     obj3.next = obj2;

//     const result = solution(obj1);
//     expect(result).to.equal(true);
//   });

//   it('should return true for circular linked list back to first node', () => {
//     const obj1 = {
//       v: 1
//     };
//     const obj2 = {
//       v: 2
//     };
//     const obj3 = {
//       v: 3
//     };
//     obj1.next = obj2;
//     obj2.next = obj3;
//     obj3.next = obj1;

//     const result = solution(obj1);
//     expect(result).to.equal(true);
//   });
// });
