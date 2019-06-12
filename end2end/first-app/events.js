const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listner
emitter.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

const log = require('./logger');
log('message');
