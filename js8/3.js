/* Given a binary tree,
return the maximum distance between any 2 nodes
Examples:

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
            val: 50
        }
    };
solution(a); // should return 3
const a = {
    val: 30,
    left: {
        val: 1
    },
    right: {
        val: 2
    }
};
solution(a); // should return 2
*/

const solution = (node) => {
  if (!node || (!node.right && !node.left)) return 0;
  
  const left = node.left ? solution(node.left) + 1 : 0
  const right = node.right ? solution(node.right) + 1 : 0

  return Math.max(left + right, solution(node.left), solution(node.right));
};

module.exports = {
    solution,
};
