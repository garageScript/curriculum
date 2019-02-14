/*

Given a binary tree, find the maximum depth
Examples:

    tree1
    (30)
    /  \
 (50)  (50)
      /  |
   (10) (10)

const a = (above tree);
solution(a); // should return 2
tree1

(30)

const a = (above tree);
solution(a); // should return 0 */










// PART 1

// Take the object and turn it into a nested
// array



// Input:
const a = {

  val: 30,
  right: {

    val: 50,
      right: {

        val: 10
      },
    left: {
        val: 10
      },
  },
  left: {
    val: 50,
  },
};

console.log("a = ", a);



// Breath First Traversal
/*
const bft = (n, c = []) => {
    if (!n) return;
    console.log("Breadth First Traversal = ", n.v);
    c = c.concat(n.children || []);
    return bft(c.shift(), c);
}
*/



console.log(Object.values(a));


const bfs = (node, queue = [], currentNode = null) => {
  
  queue.push(node);

  while(queue.length) {
    currentNode = queue.shift();
  
    console.log("bfs =", node.val);

    if (node.left)queue.push(node.left);
    if (node.right)queue.push(node.right);
  }
}





console.log(bfs(a));



// Output:
// const a = [[30], [50, 50], [10, 10]];




// --------------------------------------------------




/* PART 2 SOLUTION

// Tree should return an array of
const a = [[30], [50, 50], [10, 10]];

// Count the amount of layers in the nested array

const solution = (array, i = 0) => {
  if (i === array.length) return i - 1; 
  console.log('i =', i);
  console.log('array =', array);
  return solution(array, i + 1);
};

console.log(solution(a));
// should print 2 indexing from 0

*/




module.exports = {
   solution,
};
