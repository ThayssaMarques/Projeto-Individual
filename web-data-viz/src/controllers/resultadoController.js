var resultadoModel = require("../models/resultadoModel");

function registrar(req, res) {
    
    var acertos = req.body.acertosServer;
    var totalPerguntas = req.body.totalPerguntasServer;
   
    var idUsuario = req.params.idUsuario;

    
    if (acertos == undefined) {
        res.status(400).send("Os acertos estão undefined!");
    } else if (totalPerguntas == undefined) {
        res.status(400).send("O total de perguntas está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
             resultadoModel.registrar(acertos, idUsuario)
            .then(function (resultado) {
                res.status(201).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao registrar o resultado: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}
function buscarUltimos(req, res) {
    var limite = 7;   
    var idUsuario = req.params.idUsuario;

    resultadoModel.buscarUltimos(idUsuario, limite)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");  
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os resultados: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


function buscarKpis(req, res) {
    var idUsuario = req.params.idUsuario;

    resultadoModel.buscarKpis(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os KPIs: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    registrar,
    buscarUltimos,
    buscarKpis
};