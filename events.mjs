import { EventEmitter } from 'node:events';

const emitter = new EventEmitter();
// membuat event
emitter.addListener('hello', (name) => console.log(`hello ${name}`));

emitter.once('newListener', (event, listener) => {
   if (event == 'event') {
      // membuat event
      emitter.on('event', () => console.log('B'));
   }
   // membuat event
   emitter.on('tes', () => console.log('tes'));
});
// membuat event
emitter.on('event', () => console.log('A'));

emitter.once('connection', (stream) => {
   console.log('Ah, we have our first user!');
});
// akan di panggil pertama dari nama event connection jika ke trigger
emitter.prependListener('connection', (stream) => {
   console.log('Ah, we have our first user (2)!');
});

// trigger event
emitter.emit('hello', 'Jani Chan');

emitter.emit('event');
emitter.emit('tes');
emitter.emit('connection');

function pong() {
   console.log('pong');
}

emitter.on('ping', pong);
emitter.once('ping', pong);
emitter.removeListener('ping', pong);

emitter.emit('ping');
emitter.emit('ping');
