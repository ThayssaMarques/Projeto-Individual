var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.post("/registrar/:idUsuario", function (req, res) {
    resultadoController.registrar(req, res);
});

router.get("/ultimos/:idUsuario", function (req, res) {
    resultadoController.buscarUltimos(req, res);
});

router.get("/kpis/:idUsuario", function (req, res) {
    resultadoController.buscarKpis(req, res);
});

module.exports = router;