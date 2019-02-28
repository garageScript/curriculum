/* findNum - Takes in the root node of a tree and
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

a = {v: 2};
b = {v: 3};
c = {v: 1};
a.children = [b, c];

// Hint: BFS or DFS from the teaching doc
const solution = (n, value, c =[]) => {
  if (!n) return;
  if (n.v = value) return n.v;
  return solution(n.children, c);
};

module.exports = {
  solution,
};
