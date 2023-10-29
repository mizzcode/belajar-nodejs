const fs = require('node:fs');
const zlib = require('node:zlib');

const source = fs.readFileSync('stream.txt.gz');
console.log('success compress to gzip \n' + source.toString());
const result = zlib.unzipSync(source);
console.log('success decompress from gzip \n' + result.toString());
