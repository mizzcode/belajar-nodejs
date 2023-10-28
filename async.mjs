function samplePromise() {
   return Promise.resolve('Mizz');
}
// tidak perlu membuat function dengan keyword asycn ketika menggunakan keyword await jika menggunakan module js

const names = await samplePromise();
console.info(names);
