import fs from 'fs';
import { yarg } from './plugins/args.plugins';


console.log(yarg);

const numero: number = yarg.b;



let outputMessage = ``;


for (let index = 0; index <= yarg.l; index++) {
     outputMessage += ` ${numero} * ${index} =  ${numero * index} \n`;
}

if (yarg.s) {

     console.log('====================');
     console.log(`Table del ${numero}`);
     console.log('====================');

     console.log(outputMessage);
}
fs.mkdirSync('./outputs', { recursive: true });
fs.writeFileSync(`./outputs/tabla-${numero}.txt`, outputMessage, { flag: 'w' });
