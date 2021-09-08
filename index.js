require('colors')
const { menu, pause } = require('./helpers/inquirer');
const db = require('./db/db.service')
const options = require('./helpers/ops');
const Tareas = require('./models/tareas');
const tareas =  new Tareas( db.obtenerDB() );


const main = async() => {
    let option;
    do{
        console.clear();
        option = await menu();
        if( option ){
            await options[ option ]( tareas );
            db.guardarDB( tareas._listado );
            await pause();
        }
    }while( option )
    
};


main();
