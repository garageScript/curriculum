// https://leetcode.com/problems/minimize-malware-spread/

/**
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
**/

/**
In a network of nodes, each node i is directly 
connected to another node j if and only if graph[i][j] = 1.
Some nodes initial are initially infected by malware.

Whenever two nodes are directly connected and at least one
of those two nodes is infected by malware, both nodes will be
infected by malware.

This spread of malware will continue until
no more nodes can be infected in this manner.

Suppose M(initial) is the final number of nodes
infected with malware in the entire network,
after the spread of malware stops.

We will remove one node from the initial list.
Return the node that if removed, would minimize M(initial).

If multiple nodes could be removed to minimize M(initial),
return such a node with the smallest index.

Note that if a node was removed from the initial list of
infected nodes, it may still be infected later as a result of the malware spread.


Note:

1 < graph.length = graph[0].length <= 300

0 <= graph[i][j] == graph[j][i] <= 1

graph[i][i] = 1

1 <= initial.length < graph.length

0 <= initial[i] < graph.length
**/


//Example 1:

//Input: graph = [[1,1,0],[1,1,0],[0,0,1]], initial = [0,1]
//Output: 0



//Example 2:

//Input: graph = [[1,0,0],[0,1,0],[0,0,1]], initial = [0,2]
//Output: 0



// Example 3:

//Input: graph = [[1,1,1],[1,1,1],[1,1,1]], initial = [1,2]
//Output: 1

var minMalwareSpread = function(graph, initial) {

};


const graph1 = [[1,1,0],[1,1,0],[0,0,1]]
const initial1 = [0,1]
console.log('graph1', graph1)
console.log('initial1', initial1)
console.log("graph1 output: 0")
console.log(" ")

const graph2 = [[1,0,0],[0,1,0],[0,0,1]]
const initial2 = [0,2]
console.log('graph2', graph2)
console.log('initial2', initial2)
console.log("graph2 output: 0")
console.log(" ")

const graph3 = [[1,1,1],[1,1,1],[1,1,1]]
const initial3 = [1,2]
console.log('graph3', graph3)
console.log('initial3', initial3)
console.log("graph3 output: 1")

