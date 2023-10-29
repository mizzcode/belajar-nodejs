const net = require('node:net');
const client = net.createConnection({ port: 8124 }, () => {
   // 'connect' listener.
   console.log('connected to server!');
});

client.on('data', (data) => {
   console.log(`Response from server : ${data.toString()}`);
   // client.end();
});

setInterval(() => {
   client.write(`${process.argv[2]}\r\n`);
}, 2000);

client.on('end', () => {
   console.log('disconnected from server');
});
