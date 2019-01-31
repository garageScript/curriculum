const solution = (arr) => {
  const re = /^[a-z]{1,6}_?\d{0,4}@c0d3\.com/
  return arr.map(s => re.test(s))
}

module.exports = {
  solution
}
