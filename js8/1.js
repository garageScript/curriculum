/* Given a binary tree, find the largest value
* @param {object} a
* @returns {number}

Example Tree:
        (30)
        / \
    (50)   (40)

const a = {
    val: 30,
    right: {
        val: 40
    },
    left: {
        val: 50
    }
};
solution(a)
should return 50 */

const solution = (node, largest = 0) => {
    console.log("node =", node);
    console.log("largest =", largest);
    console.log("node.val =", node.val);
    console.log("node.left =", node.left);
    console.log("node.right =", node.right);

    if (!node.left && !node.right) return largest;

    if (!node.val > largest) largest = node.val;
    solution(node.left);
    // if (!node) return largest;
        solution(node.right);
    // node = (node.left || node.right);
    // return solution(node, largest);
};

module.exports = {
    solution,
};
