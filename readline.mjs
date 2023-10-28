import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const listMenu = ['BURGER QUEEN', 'KEBAB KING', 'RISOL', 'TELOR CEPLOK', 'SOTO AYAM'];
const availableMenu = listMenu.length;

console.info('==== WARTEG FOOD ====');
console.info('Berikut Menu - Menu Andalan Kami');

for (let i = 1; i <= availableMenu; i++) {
   console.log(`${i}. ${listMenu[i - 1]}`);
}

const answer = await rl.question('Mau Menu Nomor Berapa? ');

if (answer >= 1 && answer <= availableMenu) {
   console.log('OK! Pesanan anda akan segera diproses');
}

switch (answer) {
   case '1':
      console.info(`Menu yang Anda pilih adalah ${listMenu[0]}`);
      break;
   case '2':
      console.info(`Menu yang Anda pilih adalah ${listMenu[1]}`);
      break;
   case '3':
      console.info(`Menu yang Anda pilih adalah ${listMenu[2]}`);
      break;
   case '4':
      console.info(`Menu yang Anda pilih adalah ${listMenu[3]}`);
      break;
   case '5':
      console.info(`Menu yang Anda pilih adalah ${listMenu[4]}`);
      break;
   default:
      console.info('Menu yang Anda pilih tidak ada');
      break;
}
rl.close();
