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

const solution = (a) => {
  table = {}
  fun = (a) => {
    if (a === undefined) return false
    if (a.v in table) return true
    table[a.v] = true
    return fun(a.next)
  }
  return fun(a)
}

module.exports = {
  solution
}
