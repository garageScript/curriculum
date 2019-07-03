/**
 * takes in a linked list, return a new linked list with all different nodes
 * each node has the same value as the original linked list
 * Each node sa 2 keys: v and next
 */

const solution = (obj, val) => {
  if (!obj) return 0
  const left = solution(obj.left, val)
  const right = solution(obj.right, val)
  return left + right + (obj.v === val ? 1 : 0)
}

module.exports = {
  solution
}
