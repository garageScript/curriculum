const Logger = require('./logger');

const logger = new Logger()

logger.on('message', (data) => console.log('Called Listener:', data))

console.log(" ")

logger.log('Hello World')
console.log(" ")
logger.log('Hi')
console.log(" ")
logger.log('Hello')
