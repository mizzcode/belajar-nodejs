const http = require('node:http');

const server = http.createServer((req, res) => {
   if (req.method === 'GET') {
      switch (req.url) {
         case '/':
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(
               JSON.stringify({
                  success: true,
                  data: {
                     id: '1',
                     name: 'Honda Brio',
                     plateNumber: '123 HD 99',
                  },
               })
            );
            break;
         case '/about':
            res.writeHead(200);
            res.end('Car adalah mobil');
            break;
      }
   }
});

server.listen(3000);
