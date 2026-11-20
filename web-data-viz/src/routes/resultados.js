var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

// POST /resultados/registrar/5 → grava um resultado do usuário de id 5
router.post("/registrar/:idUsuario", function (req, res) {
    resultadoController.registrar(req, res);
});

var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

// POST /resultados/registrar/5 → grava um resultado do usuário de id 5
router.post("/registrar/:idUsuario", function (req, res) {
    resultadoController.registrar(req, res);
});

// GET /resultados/ultimos/5 → últimas tentativas do usuário 5
router.get("/ultimos/:idUsuario", function (req, res) {
    resultadoController.buscarUltimos(req, res);
});


module.exports = router;