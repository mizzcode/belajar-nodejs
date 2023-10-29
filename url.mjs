import { URL } from 'node:url';

const url = new URL('/car?id=1', 'https://misbah.devs.id');

console.log('href : ' + url.href);
console.log('protocol : ' + url.protocol);
console.log('hostname : ' + url.hostname);
console.log('pathname : ' + url.pathname);
console.log('search : ' + url.search);
const params = url.searchParams;
console.log(params);
console.log('value search param id : ' + params.get('id'));
console.log('search param string : ' + url.searchParams.toString());
