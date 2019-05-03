/* Given a binary tree,
return the maximum distance between any 2 nodes
Examples:*/

const A = { val: 'A'};
const B = {val: 'B'};
const C = {val: 'C'};

A.left = B;
A.right = C;

const a = {val: 'a'};
const b = {val: 'b'};
const c = {val: 'c'};
const d = {val: 'd'};
const e = {val: 'e'};

a.left = b;
a.right = c;

b.left = d;
b.right = e;

const solution = node => {
  if (!node || (!node.right && !node.left)) return 0;
  const left = node.left ? solution(node.left) + 1 : 0
  const right = node.right ? solution(node.right) + 1 : 0
  return Math.max(left + right, solution(node.left), solution(node.right));
};

console.log(solution(A), 2); // should return 2
console.log(solution(a), 3); // should return 3

module.exports = {
    solution,
};
