/* Given a binary tree, find the largest value
* @param {object} a
* @returns {number}

Example Tree:
        (30)
        / \
    (50)   (40)
    returns 50
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

// const dfs = (node) => {
//   if (!node) return;
//   dfs(node.left);
//   console.log('node.val =', node.val);
//   dfs(node.right);
// };

// console.log(dfs(a));

const solution = (node, largest = -1000) => {
  if (!node) return largest;
  solution(node.left);
  if (node.val > largest) largest = this.val;
  console.log('node.val =', node.val);
  console.log('largest =', largest);
  solution(node.right);
};

console.log(solution(a));

module.exports = {
  solution,
};
