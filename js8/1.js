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

const solution = (node) => {
  if (!node) return -Infinity
  return Math.max(solution(node.left), node.v, solution(node.right))
};

module.exports = {
  solution,
};
