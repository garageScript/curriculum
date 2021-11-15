/*
 * write a map function for objects
 * @param {callback} cb
 * @returns {number}
*/

const solution = () => {
  Object.prototype.map = function (cb) {
    const arr = Object.entries(this)
    if(arr === []) return arr
    return arr.map((e,i)=>{
        return cb(e[0], e[1], i)
    })
  }
}

module.exports = {
  solution
}
