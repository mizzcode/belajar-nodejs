import cluster from 'cluster';
import http from 'http';
import os from 'os';
import process from 'process';

if (cluster.isPrimary) {
   // jalankan worker
   console.log(`primary : ${process.pid}`);
   // menjalankan worker sesuai dengan jumlah cpu kita
   for (let i = 0; i < os.cpus().length; i++) {
      cluster.fork();
   }
   // jika proses exit akan ke trigger dan worker berhenti bekerja
   cluster.on('exit', (worker) => {
      console.log(`Worker ${worker.id} is exit...`);
      // jika worker berhenti bekerja, kita tinggal buat worker baru
      cluster.fork();
   });
}
// ini adalah worker
if (cluster.isWorker) {
   // worker dengan proses id
   console.log(`worker : ${process.pid}`);
   // membuat server dengan module http
   const server = http.createServer((req, res) => {
      res.end(`Response from process ${process.pid}`);
      // exit proses
      process.exit();
   });

   server.listen(3000);
}
