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

// LINKS NODES
// let a = {val: 30};
// let b = {val: 40};
// let c = {val: 50};

// a.left = c;
// a.right = b;

const dfs = (node, largest = -1000) => {
    if (!node) return largest;
    console.log("node =", node);
    console.log("largest =", largest);
    if (largest < node.val) largest = node.val;
    dfs(node.left);
    console.log("node.val =", node.val);
    dfs(node.right);
};

console.log(dfs(a));

// module.exports = {
//     solution,
// };
