const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimento', (request, response) => {
        Atendimento.listarTudo(response)
    })

    app.post('/atendimento', (request, response) => {
        const atendimento = request.body
        Atendimento.adiciona(atendimento, response)
    })
}