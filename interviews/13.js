const solution = (str) => {
  const reWithSemi = /\w+=\w+[;]$/
  const reWithoutSemi = /\w+=\w+[^;]$/
  str = str.split(' ')
  const last = str.pop()
  return !!((str.every(s => reWithSemi.test(s)) && reWithoutSemi.test(last)))
}

module.exports = {
  solution
}
