const EventEmitter = require('events')
const uuid = require('uuid')

console.log(uuid.v4())
// there are different versions
console.log(uuid.v4())
console.log(uuid.v4())
console.log(uuid.v4())
console.log(uuid.v4())
console.log(uuid.v4())
console.log(uuid.v4())
console.log(uuid.v4())

class Logger extends EventEmitter {
  log(msg) {
  // call/raise event
  this.emit('message', { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
