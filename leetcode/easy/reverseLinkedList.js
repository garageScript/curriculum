// https://leetcode.com/problems/reverse-linked-list/

/* 
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
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
 */

// a -> b -> c
a = {v: 2};
b = {v: 3};
c = {v: 1};
a.next = b;
b.next = c;


var reverseList = function(head, arr = []) {
    if (!head) return arr;
    reverseList(head.next);
    arr.push(this.val);
    return reverseList(head, arr)
};

console.log(reverseList(a)) // c -> b -> a
