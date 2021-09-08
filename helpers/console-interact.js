const input = (query) => new Promise( ( resolve ) => {
    const interface = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    interface.question(query, ( ans ) => {
        interface.close()
        resolve( ans )
    })
} )



module.exports = {
    input
}