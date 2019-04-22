// https://leetcode.com/problems/binary-tree-paths/

/* 257. Binary Tree Paths
Easy

Favorite

Share
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

// Binary Tree
const a = {val: 1}
const b = {val: 2}
const c = {val: 5}
const d = {val: 3}

// root a
a.left = b
a.right = d
b.right = c


// Perfect Tree
const A = {val: 1} //    1
const B = {val: 2} //   2 3  
const C = {val: 3} // 4 5 6 7  
const D = {val: 4}
const E = {val: 5}
const F = {val: 6}
const G = {val: 7}

A.left = B
A.right = C

B.left = D
B.right = E

C.right = F
C.left = G

// DFS
var DFS = function(node) {
  if (!node) return;
  DFS(node.left);
  console.log(node.val, 'DFS');
  DFS(node.right);
};

// BFS
var BFS = function(node) {
  let queue = [];
  let current = null;

  queue.push(node);

  while(queue.length) {
  current = queue.shift();
  
  console.log(current.val, 'BFS');
  
  if (current.left) queue.push(current.left);
  if (current.right) queue.push(current.right);
  }
}
	
var binaryTreePaths = function(node, queue = []){
  if (!node) return queue
  binaryTreePaths(node.left)
  queue.push(node.val)
  binaryTreePaths(node.right)
}

console.log(binaryTreePaths(a))
console.log(BFS(A))
console.log(DFS(A))
