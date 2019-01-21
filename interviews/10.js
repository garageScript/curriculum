const solution = (n) => {
  let b = 0
  let a = 1
  let next
  const res = [0, 1]
  while (n !== res.length) {
    next = a
    a = a + b
    res.push(a)
    b = next
  }
  return res
}

module.exports = {
  solution
}
