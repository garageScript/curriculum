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

const a = {

  val: 30,
  right: {

    val: 50,
      right: {

        val: 10
      },
    left: {
        val: 10
      },
  },
  left: {
    val: 50,
  },
};

console.log("a = ", a);

const solution = (node, count = 0) => {
  if (!node.left || !node.right) return count;
  
  solution(node.left, count + 1);

  solution(node.right, count + 1);
};


module.exports = {
   solution,
};
