import { Buffer } from 'node:buffer';

const buf = Buffer.from('Mizz Code', 'utf-8');

console.log(buf.toString());
console.log(buf.toString('hex'));

const buf2 = Buffer.from([1, 2, 3, 4, 5]);

for (const b of buf2) {
   console.log(b);
}
