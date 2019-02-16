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
  maxCount = 0;
  maxCount = dfs(node, maxCount);
  return maxCount;
};

const dfs = (node, maxCount) => {
  if (!node) return maxCount;
  console.log("left =", node.left, "level =", maxCount, "right=", node.right);
  maxCount++;
  max1 = dfs(node.left, maxCount);
  max2 = dfs(node.right, maxCount);
  return Math.max(max1, max2);
};


module.exports = {
   solution,
};
