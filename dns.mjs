import dns from 'dns/promises';

const ip = await dns.lookup('misbah.devs.id');

console.log(ip.address);
console.log(ip.family);
