const EventEmitter = require('events');
const emitter = new EventEmitter();
// EventEmtter is a class
// A.K.A. container for a bunch of methods and 
// properties

// Register a listener
emitter.on('messageLogged', (arg) => { // arg/e/event
  console.log('Listener called', arg);
});

emitter.on('logging', (e) => {
  console.log('logging event', e)
})

// Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' });
// used to raise an event
// emit => making a noise, produce
// signaling that an event has happened

// Raise: logging (data: message)
emitter.emit('logging', { data: 'message' })
