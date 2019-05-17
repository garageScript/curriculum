// https://leetcode.com/problems/balanced-binary-tree/
// Jack:
// https://docs.google.com/document/d/1cernE_9Dlb0T-tzEVyYzmVWf4BqOoTwRA_e1gR4-yOY/edit

/* 4) Given a sorted binary tree, return the vertical order
 * traversal of its nodes' values. (ie, column by column
 * from left to right, and within a column from top to bottom).
 * If two nodes are in the same row and column (in example below: 9 and 12),
 * the order should be from left to right (in example below: 9, then 12).

Example:
a)   input:
          10
        /    \
       5     15
      / \   /  \
     3   9 12  17
          /
         /
        11

output: [3, 5, 11, 10, 9, 12, 15, 17] */
const a = {val: 10}
const b = {val: 5}
const c = {val: 15}
const d = {val: 3}
const e = {val: 9}
const f = {val: 12}
const g = {val: 17}
const h = {val: 11}

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;
c.right = g;

f.left = h;




/*
Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true. */

const A = {val: 3}
const B = {val: 9}
const C = {val: 20}
const E = {val: 15}
const F = {val: 7}

A.left = B;
A.right = C;

C.left = E;
C.right = F;

/* Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false. */

const node1 = {val: 1}
const node2 = {val: 2}
const node3 = {val: 3}
const node4 = {val: 3}
const node5 = {val: 3}
const node6 = {val: 4}
const node7 = {val: 4}

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function(root) {

};
