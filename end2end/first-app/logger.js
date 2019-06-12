const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
  console.log(message)

// raise an event
  this.emit('messageLoaded', { id: 1, url: 'http://' })
// instead of using event.emit
  }
}

module.exports = Logger;
