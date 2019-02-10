/* Given a binary tree, find the largest value
* @param {object} a
* @returns {number}

Example Tree:
        (30)
        / \
    (50)   (40)
*/

const a = {
  val: 30,
  right: {
    val: 40,
  },
  left: {
    val: 50,
  },
};

const dfs = (node) => {
  if (!node) return;
  dfs(node.left);
  console.log("node.val = ", node.val);
  dfs(node.right);
};

const solution = (n, num = -1000) => {
  console.log("dfs(n) =", dfs(n));
  return dfs(n);
};

console.log(solution(a));

module.exports = {
  solution,
};
