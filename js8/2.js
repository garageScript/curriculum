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

const solution = (node, holder) => {
  node = bft(node, holder);
  console.log(node)
};

const bft = (node, array = []) => {
  if (!node) return array;
  array = array.concat(node.children || []);
  return bft(c.shift(), array);
};

module.exports = {
   solution,
};
