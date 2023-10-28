function samplePromise() {
   return Promise.resolve('Mizz');
}
// wajib menggunakan keyword asycn ketika menggunakan keyword await
async function run() {
   const names = await samplePromise();
   console.info(names);
}

run();
