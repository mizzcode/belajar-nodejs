import os from 'os';

console.log(os.platform());
console.table(os.cpus());

// error karena jika menggunakan ES module harus extension file nya .mjs
