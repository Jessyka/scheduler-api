const customExpress = require('./config/customExpress')

const databaseConnection = require('./infrastructure/connection')

databaseConnection.connect((error) => {
    if(!error){
        const app = customExpress()
        app.listen(3000, () => { console.log('Listen 3000.')})
    }
})

