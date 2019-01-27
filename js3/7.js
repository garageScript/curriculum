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

// {v: 2, next : {v: 3, next : {v: 1} } }

const solution = (node, v = node.v) => {
  // if (!node.next) return v;
  if (!node.next) return v;
  console.log("node =", node);
  console.log("node.v =", node.v);
  console.log("v =", v);

  if (v < node.v) v = node.v;
  node = node.next;
  return solution(node, v);
};

module.exports = {
  solution,
};
