var database = require("../database/config");

function registrar(acertos, totalPerguntas, idUsuario) {
    var instrucaoSql = `
        INSERT INTO resultado_quiz (acertos, total_perguntas, data_hora, fk_usuario)
        VALUES (${acertos}, ${totalPerguntas}, NOW(), ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimos(idUsuario, limite) {
    var instrucaoSql = `
        SELECT
            acertos,
            total_perguntas,
            DATE_FORMAT(data_hora, '%d/%m %H:%i') AS momento_grafico
        FROM resultado_quiz
        WHERE fk_usuario = ${idUsuario}
        ORDER BY id DESC
        LIMIT ${limite};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
    buscarUltimos
};