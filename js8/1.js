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


const solution = (node, holder = []) => {
  dfs(node, holder);
  return Math.max.apply(Math, holder);
};

const dfs = (node, array = []) => {
   if (!node) return array;
   dfs(node.left, array);
   array.push(node.val);
   dfs(node.right, array);
};



console.log(solution(a));

module.exports = {
  solution,
};
