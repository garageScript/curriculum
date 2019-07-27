// https://leetcode.com/problems/sort-list/

/* 
Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
**/

const a = {val:4}
const b = {val:2}
const c = {val:1}
const d = {val:3}

//Input: 4->2->1->3
a.next = b;
b.next = c;
c.next = d;
//Output: 1->2->3->4

console.log(a)

const node1 = {val:-1}
const node2 = {val:5}
const node3 = {val:3}
const node4 = {val:4}
const node5 = {val:0}

//Input: -1->5->3->4->0
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
//Output: -1->0->3->4->5

console.log(node1)


var sortList = function(head) {

};
