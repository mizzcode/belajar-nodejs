import { readFile } from 'fs/promises';
import { writeFile } from 'fs/promises';
try {
   const filePath = new URL('./package.json', import.meta.url);
   const contents = await readFile(filePath, { encoding: 'utf8' });
   await writeFile('temp.txt', 'Hello NodeJS');
   console.log(contents);
} catch (err) {
   console.error(err.message);
}
