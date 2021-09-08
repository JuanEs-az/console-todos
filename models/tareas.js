const Tarea = require('./tarea');
/*
_listado: {
    'uuid-000-000-000': {
        id: 'uuid-000-000-000',
        desc: 'Hola',
        completadoEn: 'Fecha'
    }
}
*/
class Tareas{
    // _listado = {};
    constructor( listado ){
        this._listado = listado || {};
    }
    get getListado(){
        return Object.values( this._listado )
    }
    set setListado( listado ){
        this._listado = listado
    }
    crearTarea( desc = '' ){
        const tarea = new Tarea( desc )
        this._listado[ tarea.id ] = tarea
    }
    listarTareas( list = this.getListado ){
        list.forEach(({ desc, completadoEn }, index) => {
            const status = completadoEn ? `(✓)${ completadoEn }`.cyan : '(✘)'.yellow
            console.log( `${ (index + 1 + '').green }. ${desc} ${ status }` )
        });
    }
    listarCompletadas( completadas = true ){
        this.listarTareas( this.getListado.filter( tarea => tarea.completadoEn ? completadas : !completadas ) )
    }
    deleteById( id ){
        delete this._listado[ id ]
    }
}
module.exports = Tareas