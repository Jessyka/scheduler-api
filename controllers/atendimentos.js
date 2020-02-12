const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimento', (request, response) => {
        Atendimento.listarTudo(response)
    })

    app.post('/atendimento', (request, response) => {
        const atendimento = request.body
        Atendimento.adiciona(atendimento, response)
    })

    app.patch('/atendimento/:id', (request, response) => {
        const id = parseInt(request.params.id)
        const valores = request.body
        Atendimento.alterar(id, valores, response)
    })
    
    app.delete('/atendimento/:id', (request, response) => {
        const id = parseInt(request.params.id)
        Atendimento.delete(id, response)
    })


}