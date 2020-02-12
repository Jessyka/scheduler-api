const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimento', (request, response) => {
        response.send('meu atendimento method get')
    })

    app.post('/atendimento', (request, response) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento)
        res.send('Post atendimento')
    })
}