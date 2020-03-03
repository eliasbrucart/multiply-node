const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {

    console.log("=======================".green);
    console.log(`tabla de ${ base }`.red);
    console.log("=======================".yellow);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } *  ${ i } = ${ base * i }`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(colors.green(`tabla - $ { base }-al-${ limite }.txt`));
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}