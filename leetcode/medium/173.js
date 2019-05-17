// https://leetcode.com/problems/binary-search-tree-iterator/
// Jack:
// https://docs.google.com/document/d/1cernE_9Dlb0T-tzEVyYzmVWf4BqOoTwRA_e1gR4-yOY/edit

/* 2)Implement an iterator over a binary search tree (BST).
Your iterator will be initialized with the root node of a BST.
Calling next() will return the next smallest number in the BST.
*/

const node1 = {val: 7}
const node2 = {val: 3}
const node3 = {val: 16}
const node4 = {val: 9}
const node5 = {val: 20}

node1.left = node2;
node1.right = node3;

node3.left = node4;
node3.right = node5;

/*
  (7)
  /  \
(3)  (16)
     /  \
   (9)  (20)
*/


// Utilzie a stack data structure
// Push and pop off the stack to get the nodes

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} node 
 */

const stack = [];

var BSTIterator = function(node) {

};

/**
 * @return the next smallest number
 * @return {number}
 */

BSTIterator.prototype.next = function() {
    
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */

BSTIterator.prototype.hasNext = function() {
  return (stack.length === 0)    
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

let iterator = new BSTIterator(root);

iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false
