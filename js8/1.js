/* Given a binary tree, find the largest value
* @param {object} a
* @returns {number}

Example Tree:
        (30)
        / \
    (50)   (40)
*/
// const a = {
//     val: 30,
//     right: {
//         val: 40,
//     },
//     left: {
//         val: 50,
//     },
// };

// const solution = (node, largest = -1000) => {
//     if (!node) return largest;
//     console.log("node =", node);

//     console.log("largest =", largest);
//     solution(node.left);
    
//     console.log("node.val =", node.val);
//     if (largest < node.val) largest = node.val;
//     solution(node.right);
// };

// console.log(solution(a));

// module.exports = {
//     solution,
// };


// A = {
//     value: 15,
//     children: [b, c, d],
// };

// B = {
//     value: 12,
//     children: [e],
// };

const b = {
    val: 40,
};

const c = {
    val: 50,
};

const a = {
    val: 30,
    children: b, c,
};
console.log(a);

const bft = (n, largest = -1000) => {
    if (!n) return;
    console.log('Breadth First Traversal = ', n.val);
    if (largest < n.val) largest = n.val;
    c = c.concat(n.children || []);
    return bft(c.shift(), c);
};

const dfs = (n, largest = -1000) => {
    if (!n) return;
    console.log('Depth First Search = ', n.v);
    c = c.concat(n.children || []);
    return dfs(c.pop(), c);
};

console.log(bft(a));
console.log('-----');
console.log(dfs(a));
