const https = require('https');
const fs = require('fs');

// const body = JSON.stringify({
//    myName: 'Mizzkun',
//    myGirlfriend: 'Janichan',
//    myAge: 19,
//    myGirlfriendAge: 19,
// });

const options = {
   hostname: 'eoo5447swbkuvyy.m.pipedream.net',
   port: 443,
   path: '/',
   method: 'GET',
   // headers: {
   //    'Content-Type': 'application/json',
   //    'Content-Length': body.length,
   // },
};

const arr = [];

const req = https.request(options, (res) => {
   res.on('data', (data) => {
      fs.writeFileSync('https-client.json', data);
      console.info(`Receive data : ${data}`);

      let body = JSON.parse(data);

      arr.push(body);

      console.log(arr);
   });
});

// req.write(body);
req.end();
