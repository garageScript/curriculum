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

const solution = (node, i = 0) => {
  if (i === 3000) return true;
  if (!node.next) return false;
  return solution(node = node.next, i + 1);
};


module.exports = {
  solution,
};
