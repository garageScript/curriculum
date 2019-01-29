const solution = (arr, i = 0, res = []) => {
  if (i >= arr.length) return res
  if (arr[i].value) res.push({ 'value': arr[i].value })
  if (arr[i].children && arr[i].children.length > 0) solution(arr[i].children, 0, res)
  return solution(arr, i + 1, res)
}

module.exports = {
  solution
}
