var database = require("../database/config");

function registrar(acertos, idUsuario) {
    var instrucaoSql = `
        INSERT INTO tentativa (fk_usuario, fk_quiz, acertos, data_hora)
        VALUES (${idUsuario}, 1, ${acertos}, NOW());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimos(idUsuario, limite) {
    var instrucaoSql = `
        SELECT
            t.acertos,
            q.total_perguntas,
            DATE_FORMAT(t.data_hora, '%d/%m %H:%i') AS momento_grafico
        FROM tentativa t
        JOIN quiz q ON t.fk_quiz = q.id
        WHERE t.fk_usuario = ${idUsuario}
        ORDER BY t.id DESC
        LIMIT ${limite};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarKpis(idUsuario) {
    var instrucaoSql = `
        SELECT
            COUNT(t.id) AS total_tentativas,
            SUM(t.acertos) AS total_acertos,
            MAX(t.acertos) AS maior_acertos,
            ROUND(SUM(t.acertos) / SUM(q.total_perguntas) * 100) AS porcentagem
        FROM tentativa t
        JOIN quiz q ON t.fk_quiz = q.id
        WHERE t.fk_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
    buscarUltimos,
    buscarKpis
};