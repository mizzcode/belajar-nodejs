import cluster from 'cluster';
import http from 'http';
import os from 'os';
import process from 'process';

if (cluster.isPrimary) {
   // jalankan worker
   console.log(`primary : ${process.pid}`);
   for (let i = 0; i < os.cpus().length; i++) {
      cluster.fork();
   }

   cluster.on('exit', (worker) => {
      console.log(`Worker ${worker.id} is exit...`);
      cluster.fork();
   });
}

if (cluster.isWorker) {
   console.log(`worker : ${process.pid}`);
   const server = http.createServer((req, res) => {
      res.end(`Response from process ${process.pid}`);
      process.exit();
   });

   server.listen(3000);
}
