import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


export const yarg = yargs( hideBin ( process.argv ) )
    .option('b', {
        alias : 'base',
        type : 'number',
        demandOption: true,
        describe : 'Multiplication table base'
    })
    .option('l', {
        alias : 'limit',
        type : 'number',
        default : 10,
        describe : 'Multiplication table limit'
    })
    .option('s', {
        alias : 'show',
        type : 'boolean',
        default : false,
        describe : 'Multiplication table show'
    })
    .options( 'n', {
        alias : 'name',
        type : 'string',
        default : 'multiplication-table',
        describe : 'File name'
    } )
    .options( 'd', {
        alias : 'destination',
        type : 'string',
        default : './outputs',
        describe : 'File name'
    } )


    .check( ( argv, option )=> {

        if(argv.b < 1) throw 'Error: Base must be greater than 0';
        if( String(argv.b).includes('.')  ) throw 'Base must be int';


        return true;

    })
    .parseSync();




