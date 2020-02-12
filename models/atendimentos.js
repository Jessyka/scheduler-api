const moment = require('moment')
const conexao = require('../infrastructure/connection')

class Atendimento {
    adiciona(atendimento, response) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        const dataCriacao = new Date()
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimento = { ...atendimento, dataCriacao, data }

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

    alterar(id, valores, response) {
        const sql = 'UPDATE Atendimentos SET ? WHERE id = ?'
        const data = moment(atendimento.valores, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
    
        if(!isValidRequest({id, ...valores, data})) {
            response.status(400).json({ errorMessage: 'Dados invalidos'})
        }

        conexao.query(sql, [id, valores], (erro, resultados) => {
            if(erro) {
                response.status(400).json(erro)
            } else {
                response.status(200).json(resultados)
            }
        })
    }

    deleta(id, response){
        const sql = 'DELETE FROM Atendimentos WHERE id = ?'

        conexao.query(sql, id, (erro, resultados) => {
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