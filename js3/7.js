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

a = { v: 2 };
b = { v: 3 };
c = { v: 1 };
a.next = b;
b.next = c;

const solution = (a, max = 0) => {
  if (!a.next) return max;
  console.log(max);
  console.log(a);

  if (max < a.v ) { max = a.v; }

  solution(a.next);
};

console.log(solution(a));

module.exports = {
  solution,
};