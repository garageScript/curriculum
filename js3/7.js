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

const solution = (a) => {
  fun = (a, acc = a.v) => {
    if (a === undefined) return acc
    if (a.v > acc) acc = a.v
    return fun(a.next, acc)
  }
  return fun(a)
}

module.exports = {
  solution
}
