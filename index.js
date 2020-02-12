const customExpress = require('./config/customExpress')
const databaseConnection = require('./infrastructure/connection')
const Tabelas = require('./infrastructure/tables')

databaseConnection.connect((error) => {
    if(!error){
        Tabelas.init(conexao)
        const app = customExpress()
        app.listen(3000, () => { console.log('Listen 3000.')})
    }
})

