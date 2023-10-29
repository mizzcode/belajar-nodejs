const zlib = require('node:zlib');
// const { pipeline } = require('node:stream');
const fs = require('node:fs');

// to use pipeline using createGzip
// const gzip = zlib.createGzip();
// const source = fs.createReadStream('temp.txt');
// const destination = fs.createWriteStream('temp.txt.gz');

// // synchronous // callback
// pipeline(source, gzip, destination, (err) => {
//    if (err) {
//       console.error('An error occurred:', err);
//       process.exitCode = 1;
//    } else {
//       console.log('compress to gzip success');
//       console.log(fs.readFileSync('temp.txt.gz').toString());
//    }
// });

// // Or, Promisified

// // asynchronous // promise
// const { promisify } = require('node:util');
// const pipe = promisify(pipeline);

// async function do_gzip(input, output) {
//    const gzip = zlib.createGzip();
//    const source = fs.createReadStream(input);
//    const destination = fs.createWriteStream(output);
//    await pipe(source, gzip, destination);
//    console.log('compress via async success');
//    console.log(fs.readFileSync(output).toString());
// }

// do_gzip('stream.txt', 'stream.txt.gz').catch((err) => {
//    console.error('An error occurred:', err);
//    process.exitCode = 1;
// });

// const source = fs.readFileSync('stream.txt');
// const result = zlib.gzipSync(source);
// console.log(result.toString());

// fs.writeFileSync('stream.txt.gz', result);

const source = fs.readFileSync('stream.txt');
const result = zlib.gzipSync(source);
console.log(result.toString());

fs.writeFileSync('stream.txt.gz', result);
