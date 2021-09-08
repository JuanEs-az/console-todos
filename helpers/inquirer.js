const inquirer = require('inquirer');
require('colors');
const initPrompt = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${ '1.'.green.bold } Crear tareas`
            },
            {
                value: 2,
                name: `${ '2.'.green.bold } Listar tareas`
            },
            {
                value: 3,
                name: `${ '3.'.green.bold } Listar tareas completadas`
            },
            {
                value: 4,
                name: `${ '4.'.green.bold } Listar tareas pendientes`
            },
            {
                value: 5,
                name: `${ '5.'.green.bold } Completar tareas`
            },
            {
                value: 6,
                name: `${ '6.'.green.bold } Borrar tarea`
            },
            {
                value: 0,
                name: `${ '0.'.red.bold } Salir`
            }
        ]
    },
];
const inquirerMenu = async() => {
    console.log('=========================='.green);
    console.log('   Seleccione una opción  '.bold);
    console.log('==========================\n'.green);
    const { option } = await inquirer.prompt( initPrompt );
    return option;
};

const pausePrompt = [
    {
        type: 'input',
        name: 'message',
        message: `Presione ${ 'ENTER'.blue.bold } para continuar`
    }
];
const pause = async() => {
    const { message } = await inquirer.prompt( pausePrompt );
    return message
};




const input = async( message ) => {
    const { value } = await inquirer.prompt([{
        type: 'input',
        name: 'value',
        message,
        validate( value ){
            if( value.length === 0 ) return 'Por favor ingrese un valor'
            return true
        }
    }])
    return value
}
const list = async( message, choices ) => {
    const { choice } = await inquirer.prompt( [{ type: 'list', name: 'choice', message, choices }] )
    return choice 
}
const iconfirm = async( message ) => {
    const { ok } = await inquirer.prompt( [ { type:'confirm', name: 'ok', message }] )
    return ok
}
const checkbox = async( message, choices ) => {
    const { checkeds } = await inquirer.prompt( [{type: 'checkbox', name: 'checkeds', message, choices}] ) 
    return checkeds
}
module.exports = {
    menu: inquirerMenu,
    pause,
    input,
    list,
    iconfirm,
    checkbox
};