const moment = require('moment')
const conexao = require('../infrastructure/connection')

class Atendimento {
    adiciona(atendimento, response) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        const dataCriacao = new Date()
        const dataAgendamento = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimento = { ...atendimento, dataCriacao, dataAgendamento }

        if(!isValidRequest(atendimento)) {
            response.status(400).json({ errorMessage: 'Dados invalidos'})
        }

        conexao.query(sql, atendimento, (erro, resultados) => {
            if(erro) {
                response.status(400).json(erro)
            } else {
                response.status(201).json(resultados)
            }
        })
    }

    listarTudo(response){
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                response.status(400).json(erro)
            } else {
                response.status(200).json(resultados)
            }
        })
    }
}

const isValidRequest = ({nome, dataCriacao, dataAgendamento}) => {
    return nome.length > 5 && moment(dataAgendamento).isSameOrAfter(dataCriacao)
}

module.exports = new Atendimento