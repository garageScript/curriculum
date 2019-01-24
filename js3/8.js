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


const solution = (a, i = 0) => {
  // if (a.next) return true;
  // if (!a.next) return false;
  // if (a.next !== a.next) return false
  // solution(a.next, i + 1);
};


module.exports = {
  solution,
};
