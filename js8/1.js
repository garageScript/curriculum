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

const dfs = (node, array) => {
   if (!node) return;
   dfs(node.left);
   array.push(node.val);
   dfs(node.right);
};

const solution = (node, i = 0, holder = [], largest = -1000) => {
  if (i === holder.length) return largest;
  node = dfs(node, holder);
  if (holder[i] > largest) largest = holder[i];
  return solution(node, i + 1, holder, largest);
};

console.log(solution(a));

module.exports = {
  solution,
};
