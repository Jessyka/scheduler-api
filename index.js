const express = require('express')

const app = express()

app.listen(3000, () => {
    console.log('my app')
})

app.get('/atendimento', (request, response) => {
    response.send('meu atendimento')
})