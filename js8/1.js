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
    // node = node.right;
    // solution(node.right);
    solution(node.right, largest);
    if (largest < node.val)  {
        largest = node.val; 
    }
    solution(node.left, largest);

    console.log("node = ", node);
    console.log("node.val =", node.val);
    console.log("largest =", largest);
    console.log("----");
};

console.log(solution(a));

module.exports = {
    solution,
};

