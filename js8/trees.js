"use strict"

// dfs bfs graph traversal
const a = {val:1}//      (a)
const b = {val:2}//      / \
const c = {val:3}//    (b)  (c)
const d = {val:4}//   / \   /  \
const e = {val:5}// (d) (e) (f) (g)
const f = {val:6}
const g = {val:7}

a.left = b;
a.right = c;

b.left = d
b.right = e;

c.left = f;
c.right = g;

// inorder (left, right, root)
const inorder = node => {
  if (!node) return;
  inorder(node.left)
  inorder(node.right)
  console.log(node.val)
}
console.log(inorder(a), 'inorder')
console.log('guess: 4, 5, 2, 6, 7, 3, 1')

// preorder (left, root, right)
const preorder = node => {
  if (!node) return;
  preorder(node.left)
  console.log(node.val)
  preorder(node.right)
}
console.log(preorder(a), 'preorder')
console.log('guess: 4, 2, 5, 1, 6, 3, 7')

// postorder (root, left, right)
const postorder = node => {
  if (!node) return;
  console.log(node.val)
  postorder(node.left)
  postorder(node.right)
}
console.log(postorder(a), 'postorder')
console.log('guess: 1, 2, 4, 5, 3, 6, 7')

// BFS
const BFS = node => {
  let queue = [];
  let current = null;

  queue.push(node)

  while(queue.length) {
  current = queue.shift();
  console.log(current.val)

  if (current.left) queue.push(current.left)
  if (current.right) queue.push(current.right)
  }
}
console.log(BFS(a), 'BFS');
console.log('guess: 1, 2, 3, 4, 5, 6, 7')

console.log(a)
