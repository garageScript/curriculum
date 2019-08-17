// https://leetcode.com/problems/remove-linked-list-elements/

/**
Definition for singly-linked list.
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

Remove all elements from a linked list 
of integers that have value val.

Example:
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5 
**/

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
**/

const one = {val:1};
const two = {val:2};
const three = {val:3};
const four = {val:4};
const five = {val:5};
const six = {val:6};
const six2 = {val:6}

one.next = two;
two.next = six2;
six2.next = three;

three.next = four;
four.next = five;
five.next = six;

var removeElements = function(node, val, arr = []) {
  if (!node) {console.log(arr); return;}
  if (node) {arr.push(node.val)}
  if (node.next.val === val) {
    node.next = node.next.next || null;
  }
  removeElements(node.next, val, arr)
};

console.log(removeElements(one, 6))

