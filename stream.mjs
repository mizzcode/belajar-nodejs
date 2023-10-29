import fs from 'fs';

const file = fs.createWriteStream('stream.txt');

file.write('hello, ');
file.end('word');
