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

const solution = (node, largest = -1000) => {
    if (!node) return largest;
    console.log("node =", node);

    console.log("largest =", largest);
    solution(node.left);
    
    console.log("node.val =", node.val);
    if (largest < node.val) largest = node.val;
    solution(node.right);
};

console.log(solution(a));

module.exports = {
    solution,
};
