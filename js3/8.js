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
  if (a === null || a.next === null) return false

  r2runner = (slow, fast) => {
    if (fast === undefined || fast.next === undefined) return false
    if (slow === fast) return true
    return r2runner(slow.next, fast.next.next)
  }

  return r2runner(a, a.next)
}

module.exports = {
  solution
}
