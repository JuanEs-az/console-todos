require('colors');
const { input, list, iconfirm, checkbox } = require('./inquirer')
const Tareas = require('../models/tareas')
module.exports = [
    //0
    undefined,
    //1  
    async function( tareas ){
        const desc = await input('Descripción: ')
        tareas.crearTarea( desc )
    },
    //2 
    async function( tareas ){
        tareas.listarTareas()
    },
    //3 
    async function( tareas ){
        tareas.listarCompletadas( true )
    },
    //4 
    async function( tareas ){
        tareas.listarCompletadas( false )
    },
    //5 
    async function( tareas ){
        const choices = tareas.getListado.map( ({ desc,completadoEn, id }, index) => ({
            name: `${ (index + 1 + '').green.bold }. ${ desc }`,
            value: id,
            checked: !!completadoEn
        }) )
        const seleccionados = await checkbox('Seleccione las tareas que desea completar: ', choices)
        tareas.getListado.forEach( ({ id, completadoEn }) => {
            tareas._listado[ id ].completadoEn = seleccionados.includes( id ) 
                                                ? completadoEn || new Date().toDateString()
                                                : null
        } )

    },
    //6 
    async function( tareas ){
        const choices =  tareas.getListado.map(({ desc, completadoEn, id }, index) => {
            const status = completadoEn ? `(✓)${ completadoEn }`.cyan : '(✘)'.yellow
            return {
                name: `${ (index + 1 + '').green.bold }. ${desc} ${ status }`,
                value: id
            } 
        })
        choices.unshift( { name: `${ '0'.red.bold }. Volver`, value: 0 } )
        const IDtarea = await list('¿Qué tarea desea eliminar?',choices);
        if( IDtarea === 0 ) return


        console.clear();
        if( await iconfirm('¿Está seguro?') ){
            tareas.deleteById( IDtarea )
            console.log('Tarea borrada correctamente.'.underline)
        }

    },
];