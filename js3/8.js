/* isCircular - Takes in the first node of a
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

a = {v: 2};
b = {v: 3};
c = {v: 1};

a.next = b;
b.next = c;
c.next = a;

// const solution = (node, v = node.v) => {
//   if (!node.next) return v;
//   if (v < node.v) v = node.v;;
//   return solution(node = node.next, v);
// };

const solution = (a, slower=a, faster=a.next) => {
  if (!faster || !faster.next.next) return false;
  if (faster === slower || faster.next === slower) return true;
  return solution(a, slower.next, faster.next.next);
};


module.exports = {
  solution,
};
