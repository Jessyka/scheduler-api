module.exports = app => {
    app.get('/atendimento', (request, response) => {
        response.send('meu atendimento method get')
    })

    app.post('/atendimento', (request, response) => {
        response.send('meu atendimento method post')
    })
}