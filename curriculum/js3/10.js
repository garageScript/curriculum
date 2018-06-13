/*
 * Level BFT - Given a tree, return an ordered array of node values.
 *
 * Each element of the returned array is an array of node values,
 * ordered by tree depth.
 *
 * For example, given the following tree:
 *  { v: 7, children: [{ v: 48, children: [] }, { v: 3, children: [] }]}
 *
 * The function should return:
 *  [[7], [48, 3]]
 *
 * Each node in the given tree can be assumed to have the following
 * properties: 'v' (its value), and 'children' (an array of child nodes)
 *
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

