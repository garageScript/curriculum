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

const solution = (node, obj = {}, num = 0) => {
  console.log("node =", node);
  console.log("num = ", num);
  
  k = Object.keys(node);
  v = Object.values(node);
  console.log("k =", k);
  console.log("v =", v);

  if (!node.next) return num;

  return solution(node, obj, num);
};

module.exports = {
  solution,
};
