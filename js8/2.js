/*

Given a binary tree, find the maximum depth
Examples:

    tree1
    (30)
    /  \
 (50)  (50)
      /  |
   (10) (10)

const a = (above tree);
solution(a); // should return 2
tree1

(30)

const a = (above tree);
solution(a); // should return 0 */

const solution = (node, v = node.val, count = 0) => {
   console.log("node =", node);
   console.log("v =", v);
   if (!node.v) return v;
   if (v < node.v) v = node.v;
   solution(node.left);
   if (v < node.v) v = node.v;
   solution(node.right);
};

module.exports = {
   solution,
};
