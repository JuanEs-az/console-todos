require('colors')
const Iconsole = require('./console-interact')
const mostrarMenu = async() => {
    console.clear();

    console.log('=========================='.green);
    console.log('   Seleccione una opción  '.green);
    console.log('=========================='.green);
    console.log(`${ '1.'.green.bold } Crear tareas`);
    console.log(`${ '2.'.green.bold } Listar tareas`);
    console.log(`${ '3.'.green.bold } Listar tareas completadas`);
    console.log(`${ '4.'.green.bold } Listar tareas pendientes`);
    console.log(`${ '5.'.green.bold } Completar tareas`);
    console.log(`${ '6.'.green.bold } Borrar tarea`);
    console.log(`${ '0.'.red.bold } Salir\n`);

    return await Iconsole.input('Seleccione una opción: ')
};

const pausa = async() => await Iconsole.input(`\nPresione ${ 'ENTER'.blue } para continuar\n`);

module.exports = {
    mostrarMenu,
    pausa
};