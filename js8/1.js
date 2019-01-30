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

const solution = (node, v = node.val) => {
    if (!node.v) return v;

    if (v < node.v) v = node.v;

        solution(node.left);

        solution(node.right);
};

module.exports = {
    solution,
};
