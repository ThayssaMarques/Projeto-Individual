var resultadoModel = require("../models/resultadoModel");

function registrar(req, res) {
    // Dados que vêm no "pacote" (body) enviado pelo site
    var acertos = req.body.acertosServer;
    var totalPerguntas = req.body.totalPerguntasServer;
    // Dado que vem no endereço (/registrar/:idUsuario)
    var idUsuario = req.params.idUsuario;

    // Confere se tudo chegou antes de ir ao banco
    if (acertos == undefined) {
        res.status(400).send("Os acertos estão undefined!");
    } else if (totalPerguntas == undefined) {
        res.status(400).send("O total de perguntas está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        resultadoModel.registrar(acertos, totalPerguntas, idUsuario)
            .then(function (resultado) {
                res.status(201).json(resultado);   // 201 = "criado com sucesso"
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao registrar o resultado: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}
function buscarUltimos(req, res) {
    var limite = 7;   // quantas tentativas aparecem no gráfico
    var idUsuario = req.params.idUsuario;

    resultadoModel.buscarUltimos(idUsuario, limite)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");   // 204 = deu certo, mas não há dados
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os resultados: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    registrar,
    buscarUltimos
};