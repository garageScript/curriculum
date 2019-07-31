/* 
Implement in-order, pre-order, post-order, and breadth first search of a tree.

Use this tree for testing:
        (1)
       /   \
    (2)     (3)
    /  \    /  \
  (4)  (5) (6) (7)
*/

function Node(value) {
  this.data = value;
  this.left = null;
  this.right = null;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);

let rootNode = node1;

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

function inOrder(node) {
  if (!node) return;
  inOrder(node.left); // left
  console.log(node.data); // root
  inOrder(node.right); // right
}

function postOrder(node) {
  if (!node) return;
  postOrder(node.left); // left
  postOrder(node.right); // right
  console.log(node.data); // root
}

function preOrder(node) {
  if (!node) return;
  console.log(node.data); // root
  preOrder(node.left); // left
  preOrder(node.right); // right
}


function bfs(node) {
  const queue = [];
  let currentNode = null;

  queue.push(node);
  
  while (queue.length) {
    currentNode = queue.shift();
    
      console.log(currentNode.data);
      
     if (currentNode.left) queue.push(currentNode.left);
     if (currentNode.right) queue.push(currentNode.right);
    }
  }

console.log(inOrder(node1), "inOrder");    //4, 2, 5,1, 6, 3, 7
console.log(preOrder(node1), "preOrder");
console.log(postOrder(node1), "postOrder");
console.log(bfs(node1), "bfs");
