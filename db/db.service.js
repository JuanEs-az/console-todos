const fs = require('fs');
const file = './db/data.json';
const guardarDB = ( data ) => {
    fs.writeFileSync( file, JSON.stringify( data ) );
}
const obtenerDB = (  ) => {
    if ( !fs.existsSync( file ) ){
        return null
    }
    let info = fs.readFileSync( file, { encoding: 'utf-8' } );
    return info.length === 0 ? null : JSON.parse( info );
}
module.exports = {
    guardarDB,
    obtenerDB
}