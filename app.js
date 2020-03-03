const argv = require('./configs/yargs.js').argv;

const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado ${ archivo }`))
            .catch(err => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

console.log(argv);


//console.log(process.argv);

//let argv2 = process.argv;


//let parametro = argv[2];
//let base = parametro.split('=')[1]