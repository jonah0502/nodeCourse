const EventEmitter = require('events');

//create classs
class MyEmitter extends EventEmitter {} 
//init object
const myEmitter = new MyEmitter();
// Event Listener
myEmitter.on('event', () => console.log('Event Fired!'));
// init event
myEmitter.emit('event');
