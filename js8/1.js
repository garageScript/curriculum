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

const solution = (node) => {
    console.log("node =", node);
    // break;
    // console.log("node.left =", node.left);
    // console.log("node.right =", node.right);
    // solution(node.left);
    // console.log("node =", node);
    // solution(node.right);
};

module.exports = {
    solution,
};
