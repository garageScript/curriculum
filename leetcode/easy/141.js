// https://leetcode.com/problems/linked-list-cycle/

/*
Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list,
we use an integer pos which represents the position
(0-indexed) in the linked list where tail connects to.

If pos is -1, then there is no cycle in the linked list.

Example 1:

Input: head = [3,2,0,-4], pos = 1

Output: true

Explanation:
There is a cycle in the linked list, where tail connects to the second node.



Example 2:

Input: head = [1,2], pos = 0

Output: true

Explanation:
There is a cycle in the linked list, where tail connects to the first node.


Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.


Follow up:

Can you solve it using O(1) (i.e. constant) memory?
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
 * @return {boolean}
 */

const a = {val: 1}
const b = {val: 2}
const c = {val: 3}

const d = {val: 1}
const e = {val: 2}
const f = {val: 3}

a.next = b;
b.next = c;
c.next = null;
// false

d.next = e;
e.next = f;
f.next = d;
// true

var hasCycle = function(head) {
  let fast = head;
  let slow = head;

  while(slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true	 
  }
  return false;
};

console.log(hasCycle([3,2,0,-4]))
console.log("Output: true")

console.log(hasCycle([1,2]))
console.log("Output: true")

console.log(hasCycle([1]))
console.log("Output: false")
console.log("-------------")

// c0d3.com
// js3 Objects 8.js

const solution = (node, slower = node, faster = node.next) => {
  if (!faster || !faster.next.next) return false;
  if (faster === slower || faster.next === slower) return true;
  return solution(node.next, faster, slower)
}

console.log(solution(a), false)
console.log(solution(d), true)
