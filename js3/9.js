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
const solution = (n, c =[]) => {
  if (!n) return n;
  c = c.concat(n.children || []);
  return solution(c.shift(), c);
};

module.exports = {
  solution,
};
