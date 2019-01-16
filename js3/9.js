/*
 * findNum - Takes in the root node of a tree and
 *     a number, return a node with the same value
 * Example:
 * input:
 *    a = {v: 2};
 *    b = {v: 3};
 *    c = {v: 1};
 *    a.children = [b,c]
 *    solution(a, 3);
 * output: b
 * @param {object} node
 * @returns {object}
*/

a = { v: 2 };
b = { v: 3 };
c = { v: 1 };
a.children = [b, c]



// Hint: BFS or DFS from the teaching doc
const solution = (a) => {
  return a;
};

console.log(solution(a, 3));
// output: b

// describe('Return node of a tree', () => {
//       it('should handle base case of one node and matching value', () => {
//         const a = {
//           v: 1,
//           children: []
//         };
//         const result = solution(a, 1);
//         expect(result).to.deep.equal(a);
//       });
//       it('should handle case with 2 levels', () => {
//         const a = {
//           v: 1,
//           children: []
//         };
//         const b = {
//           v: 2,
//           children: []
//         };
//         const c = {
//           v: 3,
//           children: []
//         };
//         const d = {
//           v: 4,
//           children: []
//         };
//         a.children = [b, c, d];
//         const result = solution(a, 2);
//         expect(result).to.deep.equal(b);
//       });
//       it('should handle case with 3 levels', () => {
//         const a = {
//           v: 1,
//           children: []
//         };
//         const b = {
//           v: 2,
//           children: []
//         };
//         const c = {
//           v: 3,
//           children: []
//         };
//         const d = {
//           v: 4,
//           children: []
//         };
//         const e = {
//           v: 5,
//           children: []
//         };
//         const f = {
//           v: 6,
//           children: []
//         };
//         a.children = [b, c, d];
//         c.children = [e, f];
//         const result = solution(a, 5);
//         expect(result).to.deep.equal(e);
//       });

module.exports = {
  solution,
};