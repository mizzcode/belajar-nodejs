const net = require('node:net');
const server = net.createServer((c) => {
   // 'connection' listener.
   console.log('client connected');
   c.on('data', (data) => {
      console.log(`Receive data from client : ${data.toString()}`);
      c.write(`hello ${data.toString()}\r\n`);
   });
   c.on('end', () => {
      console.log('client disconnected');
   });
   c.pipe(c);
});
server.on('error', (err) => {
   throw err;
});
server.listen(8124, () => {
   console.log('server bound');
});
