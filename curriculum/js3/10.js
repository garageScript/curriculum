/*
 * Level BFT - Given a tree, print out an array,
 * each element is an array of nodes at that level
 * Each node has a property v, and children which is an array
 * @param {node} n
 * @returns {array}
 */

// This problem is pretty hard, you just have
// to understand whats going on and look at it over
// and over again until you can write it out yourself
const bft = (cur=[], next=[], result=[]) => {
  if (!cur.length && !next.length) return result;
  if (!cur.length) {
    result.push([]);
    return bft(next, [], result);
  }
  const n = cur.shift();
  result[result.length-1].push(n.v);
  return bft(cur, next.concat(n.children), result);
};

const solution = (n)=>{
  return bft([], [n]);
};

module.exports = {
  solution,
};

