const moment = require('moment')
const conexao = require('../infrastructure/connection')

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        const dataCriacao = new Date()
        const dataAgendamento = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimento = { ...atendimento, dataCriacao, dataAgendamento }

        if(!isValidRequest(atendimento)) {
            Response.status(400).json({ errorMessage: 'Dados invalidos'})
        }

        conexao.query(sql, atendimento, (erro, resultados) => {
            if(erro) {
                Response.status(400).json(erro)
            } else {
                Response.status(201).json(resultados)
            }
        })
    }
}

const isValidRequest = ({nome, dataCriacao, dataAgendamento}) => {
    return nome.length > 5 && moment(dataAgendamento).isSameOrAfter(dataCriacao)
}

module.exports = new Atendimento