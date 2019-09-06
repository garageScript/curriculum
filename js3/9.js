/*
 * findNum - Takes in the root node of a tree and
 *     a number, return a node with the same value
 * Example:
 * input:
 *    a = {v: 2};
 *    b = {v: 3};
 *    c = {v: 1};
 *    a.children = [b,c]
 *    solution(a, 3);
 * output: b
 * @param {object} node
 * @returns {object}
*/

// Hint: BFS or DFS from the teaching doc
const solution = (a, b) => {
  const dfs = (a, T, toVisit) => {
    if (a === undefined) return
    if (a.v === T) return a
    // console.log(a.v)
    if (a.children) {
      a.children.forEach((e) => toVisit.push(e))
    }
    return dfs(toVisit.shift(), T, toVisit)
  }

  return dfs(a, b, [a])
}

module.exports = {
  solution
}
