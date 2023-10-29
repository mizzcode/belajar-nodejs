import { setTimeout, setImmediate, setInterval } from 'timers/promises';

// console.log(new Date());

// await setTimeout(5000);

// console.log(new Date());

// const res = await setImmediate('result');

// console.log(res);

const interval = 1000;
for await (const startTime of setInterval(interval, Date.now())) {
   const now = new Date();
   console.log(now);
   if (now - startTime > 5000) break;
}
