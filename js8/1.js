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

const dfs = (node, arr = []) => {
  if (node) {
    dfs(node.left);
    arr.push(node.val);
    dfs(node.right);
  }
};

const solution = (n) => {
  let num = -1000;
  const arr = [];
  arr.push(dfs(n, arr));
  for (var i = 0; i < arr.length; i++) {
    console.log(arr);
    if (num < arr[i]) {
      num = arr[i];
    }
  }
  return num;
};

console.log(solution(a));

module.exports = {
  solution,
};
