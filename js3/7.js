/*
 * findGreatest - Takes in the first node of a
 *     linked list, return the greatest number
 * Example:
 * input:
 *    a = {v: 2};
 *    b = {v: 3};
 *    c = {v: 1};
 *    a.next = b;
 *    b.next = c;
 *    solution(a);
 * output: 3
 * @param {object} node
 * @returns {number}
*/

a = {v: 2};
b = {v: 3};
c = {v: 1};
a.next = b;
b.next = c;
console.log(a);

// {v: 2, next : {v: 3, next : {v: 1} } }

const solution = (node, max = 0) => {
  if (!node.next) return max;
  // if there is not node.next return max
  // console.log(node.v);
  if (max < node.v ) max = node.v;
  console.log(max);
  // if max is less than node.value, max = node.value
  solution(node.next);
  // iterate through all nodes in the list
};

console.log(solution(a));

// module.exports = {
//   solution,
// };
